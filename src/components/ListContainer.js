import React, { useState } from 'react';
import Form from './Form';
import Task from './Task';
import '../styles/ListContainer.scss'

function ListContainer(){

  let [tasks, setTasks]=useState([]);

  const addTask = (task)=>{
    if(task.text.trim()){
      task.text = task.text.trim();
      const updatedTasks=[task, ...tasks];
      setTasks(updatedTasks);
    }
  }
  
  const completeTask = (id)=>{
    const updatedTasks = tasks.map((task)=>{
      if(task.id === id){
        task.completed = !task.completed
        return task;
      }
      else
        return task;
    });
    setTasks(updatedTasks);
  }

  const deleteTask = (id)=>{
    const updatedTasks = tasks.filter((task)=>task.id !== id);
    setTasks(updatedTasks);
  }

  return (
    <>
      <Form onSubmit={addTask}/>
      <ul className='list'>
        {
          tasks.map((task)=>
            <Task
              key={task.id}
              id={task.id}
              completed={task.completed}
              text={task.text}
              completeTask={completeTask}
              deleteTask={deleteTask}
            />
          )
        }
      </ul>
    </>
  );
}
export default ListContainer;