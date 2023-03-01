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
    <form onSubmit={handleSubmit} style={{ display: 'flex', marginBottom: '20px' }}>
      <input type="text" value={inputValue} onChange={handleInputChange}  style={{
          backgroundColor: '#4caf50',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '0 5px 5px 0',
          cursor: 'pointer',
        }}/>
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;