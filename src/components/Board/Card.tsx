import React from 'react'
import ITask from "../../types";}

type CardProps={
    cardData:ITask
}

function Card(props:CardProps) {
    //aqui lista las tareas y la cantidad de subtareas
    {cardData}=props;
    const countCompleted = cardData.subtasks?.filter((item) => item.isCompleted === true);

  return (
    <div className='Card'>
      <div className='Card__title'>{cardData.title}</div>
      <div className='Card__count'>
        {countCompleted?.length} of {cardData.subtasks?.length} subtasks
      </div>
    </div>
  )
}

export default Card