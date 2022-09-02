import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { CardButtons, CardContainer, CardDescription, CardHeader, CardHeaderStats, CardTitle, DivCardButtons } from './CardStyle';


const TaskCard = ({ task }) => {
  const { title, description, status, importance, createdAt } = task;
  const { userName } = task.user;
  const user = localStorage.getItem('userName');
  let mainColor = 'blue';

  const displayButtons = () => {

    if ( userName === user /* || role === "Team Leader"  */) {
      return <>
          <CardButtons onClick={() => console.log("clicked task", title)} >
            Edit <FaEdit />
          </CardButtons>
          <CardButtons onClick={() => console.log("clicked task")} >
            Delete <FaTrashAlt />
          </CardButtons>
        </>
    } 

    return <></>
  }
  

  if (importance === 'HIGH') {
    mainColor = 'yellow';
  } else if (importance === 'MEDIUM') {
    mainColor = 'lightgreen';
  } else {
    mainColor = 'lightblue';
  }

  return (
    <div>
      <CardContainer mainColor={mainColor} secondColor="wheat">
        <CardHeader>
          <CardTitle>
            {title}
          </CardTitle>
          <CardHeaderStats>
            <p>{status}</p>
            <hr />
            <p>{importance}</p>
          </CardHeaderStats>
        </CardHeader>

        <CardDescription>
          {description}
        </CardDescription>
        <CardDescription>
          {createdAt}  
        </CardDescription>
        <CardDescription>
          {userName}   
        </CardDescription>

        <DivCardButtons>
          {displayButtons()}
        </DivCardButtons>

      </CardContainer>
    </div>
  )
}

export default TaskCard;