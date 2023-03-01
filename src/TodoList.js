import React from 'react';

function TodoList(props) {

function handleRemoveClick(index) {
        props.onRemove(index);
      }
  return (
    <ul>
      {props.items.map((item, index) => (
        <li key={index}>{item}
        {item && <button onClick={() => handleRemoveClick(index)}>Remove</button>}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
