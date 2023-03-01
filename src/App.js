import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  const [items, setItems] = useState([]);

  function addItem(item) {
    setItems([...items, item]);
  }
  function removeItem(index) {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  }
  return (
    <div>
      <TodoForm onSubmit={addItem} />
     <TodoList items={items} onRemove={removeItem} />
    </div>
  );
}

export default App;

