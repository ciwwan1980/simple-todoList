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
    <div style={{ display: 'flex', alignItems: 'center' }}>
    <form onSubmit={handleSubmit} >
     
      <input  type="text" value={inputValue} onChange={handleInputChange}  
      style={{
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        fontSize: '16px',
        boxShadow: 'none',
        outline: 'none',
        transition: 'border-color 0.2s ease-in-out',
        width: '100%',
        maxWidth: '500px',
        boxSizing: 'border-box',
        marginRight: '10px'
      }}
    />
 

       <button
      type="submit"
      style={{
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease-in-out'
      }}
    >
      Submit
    </button>
    </form>
    </div>
  );
}

export default TodoForm;