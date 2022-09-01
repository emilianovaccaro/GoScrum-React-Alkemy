import React from 'react';
import TaskCard from './TaskCard';

const TaskList = () => {

  const testState = [
    {
      title: "sadasd title",
      description: "ASD PRUEA UNO DOS TRES",
      status: "finished",
      importance: "high",
      id: 1,
    },
    {
      title: "tdasdad itle",
      description: "ASD PRUEA UNO DOS TRES",
      status: "new",
      importance: "mid",
      id: 2,
    },
    {
      title: "tdasdad itle",
      description: "ASD PRUEA UNO DOS TRES",
      status: "in progress",
      importance: "low",
      id: 3,
    }
  ]

  return (
    <div>
      {
        testState.map(task => <TaskCard task={task} key={task.id} />)
      }
    </div>
  )
}

export default TaskList