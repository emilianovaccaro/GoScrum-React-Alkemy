import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../Spinner/Spinner';
import TaskCard from '../Card/TaskCard';
import { ListContainer } from './listStyle';

const TaskList = () => {
  const [list, setList] = useState([]);
  const [renderList, setRenderList] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState('');

  useEffect(() => {
    const tasks = async () => {
      const res = await axios.get(`
      ${process.env.REACT_APP_API_ENDPOINT}task${selectedUsers === "mytasks" ? "/me" : ""}`, 
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      });

      setList(res.data.result);
      setRenderList(res.data.result);
    };
    
    tasks();
    return () => {}
  }, [selectedUsers]);


  const allTasks = () => (
    renderList?.map(task => <TaskCard task={task} key={task._id} />)
  );

  const handleList = (e) => {
    if (e.currentTarget.value === 'ALL') {
      setRenderList(list);
    } else {
      setRenderList(list.filter(data => (data.importance === e.currentTarget.value)));
    }
  };


  return (
    <div> 
      <div>
        <label> Filter tasks by priority </label>
        <select name="importance" onChange={handleList}>
          <option value="ALL" >ALL</option>
          <option value="LOW">LOW</option>
          <option value="MEDIUM">MEDIUM</option>
          <option value="HIGH">HIGH</option>
        </select>
      </div>
      <div>
        <label> Filter tasks by user </label>
        <select name="selected" onChange={(e) => setSelectedUsers(e.currentTarget.value)}>
          <option value="" >Team tasks</option>
          <option value="mytasks">My tasks</option>
        </select>
      </div>
      <ListContainer>
        {
          !renderList ? (
            <Spinner>Loading</Spinner>
          ) : (
            allTasks()
          )
        }
      </ListContainer>
    </div>
  )
}

export default TaskList