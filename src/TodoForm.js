import React, { useState } from 'react';

function TodoForm(props) {
  const [inputValue, setInputValue] = useState('');

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onSubmit(inputValue);
    setInputValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
