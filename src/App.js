import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  const [items, setItems] = useState([]);

  function addItem(item) {
    setItems([...items, item]);
  }

  return (
    <div>
      <TodoForm onSubmit={addItem} />
      <TodoList items={items} />
    </div>
  );
}

export default App;

