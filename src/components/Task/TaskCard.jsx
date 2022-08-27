import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';


const TaskCard = () => {
  return (
    <div className="todo">
      <div>Importance</div>
      <h2>Task Title</h2>
      <p>Description</p>
      <p>Status</p>
      <button onClick={() => console.log("clicked task")} className="close">
        <FaTrashAlt />
      </button>
    </div>
  )
}

export default TaskCard;