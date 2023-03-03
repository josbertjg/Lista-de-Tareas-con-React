import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../styles/Form.scss'

function Form(props){

  let [input, setInput] = useState('');

  const handleSubmit = (e)=>{
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      completed: false,
      text: input
    }
    props.onSubmit(newTask);
    document.getElementById('input-task').value='';
    setInput('');
  }

  const handleChange = (e)=> {
    setInput(e.target.value)
  }


  return (
    <form onSubmit={handleSubmit}>
      <input 
        type='text'
        placeholder='Write a task...'
        id='input-task'
        name='text'
        onChange={handleChange}
      />
      <button className='addbtn'>Add</button>
    </form>
  );
};
export default Form;