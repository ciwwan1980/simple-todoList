import React from 'react';
import './TodoList.css';

function TodoList(props) {

function handleRemoveClick(index) {
        props.onRemove(index);
      }
  return (
    <ul className="todo-list">
      {props.items.map((item, index) => (
        <li key={index} className="todo-item">{item}
        {item && <button className="remove-button" onClick={() => handleRemoveClick(index)}>Remove</button>}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
