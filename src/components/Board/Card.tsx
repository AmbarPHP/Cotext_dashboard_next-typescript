import React from 'react'
import { forEachChild } from 'typescript';
import {ITask} from "../../types";

type CardProps={
    cardData:ITask;
}
//pasamos el ojeto task, con su description y subtask
function Card(props:CardProps) {
    //aqui lista las tareas y la cantidad de subtareas
    const { cardData} = props;
    console.log( "Columna task :",cardData);
    console.log( "Columna task name:",cardData.name);
    console.log( "Columna task subtask:",typeof(cardData.subtasks));

   cardData.subtasks.map((item)=>{
       <div>{item.name}</div>
    });
    

    //filter((item) => item.isCompleted === true);  

  return (
    <div className='Card'>
       <div className='Card__title'>{cardData.name}</div>
      <div className='Card__count'>
        {/* {countCompleted?.length} of {cardData.subtask?.length} subtasks */}
      </div> 
    </div>
  )
}

export default Card


