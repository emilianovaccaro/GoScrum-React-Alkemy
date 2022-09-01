import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { CardButtons, CardContainer, CardDescription, CardHeader, CardHeaderStats, CardTitle, DivCardButtons } from './CardStyle';


const TaskCard = ({ task }) => {
  const { title, description, status, importance } = task;
  let mainColor = 'blue';


  if (importance === 'high') {
    mainColor = 'lightgreen';
  } else if (importance === 'mid') {
    mainColor = 'pink';
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

        <DivCardButtons>
          <CardButtons onClick={() => console.log("clicked task", title)} >
              Edit <FaEdit />
          </CardButtons>
          <CardButtons onClick={() => console.log("clicked task")} >
              Delete <FaTrashAlt />
          </CardButtons>
        </DivCardButtons>

      </CardContainer>
    </div>
  )
}

export default TaskCard;