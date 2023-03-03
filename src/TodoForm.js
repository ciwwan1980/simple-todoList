import React, { useState } from 'react';

function TodoForm(props) {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState("");

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (inputValue.trim() === "") {
      setError("Please fill out the input field.");
    } else {
      props.onSubmit(inputValue);
      setInputValue("");
      setError("");
    }
  }
  return (
    <div style={{ display: 'flex', flexDirection:"column", alignItems: 'center', padding:"10px" }}>
    <form onSubmit={handleSubmit} >
     
      <input  type="text" value={inputValue} onChange={handleInputChange}  
      style={{
        margin:"5px",
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        fontSize: '16px',
        boxShadow: 'none',
        outline: 'none',
        transition: 'border-color 0.2s ease-in-out',
        width: '95%',
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
        width: '100%',
        transition: 'background-color 0.2s ease-in-out'
      }}
    >
      Submit
    </button>
    {error && <div style={{
            color: "red",
            fontWeight: "bold",
            marginTop: "5px"
          }}>{error}</div>}
    </form>
    </div>
  );
}

export default TodoForm;