import React from 'react';
import '../styles/Task.scss';
import { AiTwotoneDelete } from "react-icons/ai";


function Task({id, completed, text, completeTask, deleteTask}){
  return (
    <li className={`task ${completed ? 'completed' : ''}`.trim()}>
      <div onClick={()=>completeTask(id)}>
        <h1>{text}</h1>
        {completed ? <span className='completed-tag'>Completed</span> : ''}
      </div>
      <span className='icon-container' onClick={()=>deleteTask(id)}>
        <AiTwotoneDelete className='task-icon'/>
      </span>
    </li>
  );
};
export default Task;