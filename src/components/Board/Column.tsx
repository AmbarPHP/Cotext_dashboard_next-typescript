import React from 'react'
import Card from './Card';
import {useState} from 'react';
import { IColumn } from '../../types';
import { ITask } from '../../types/index';

function Column() {
  const [columnData, setColumn] = useState<IColumn>({
    "id":"1",
    "name":"columna_nombre",
    "tasks":[
      {
      "name":"Launch vertion one", 
      "description": "No description",
      "done":false,
      "status":"RoadMap",
      "subtasks":[
        {"name":"launch privately our waitlist", "isCompleted":true},
        {"name":"launch publicly on PH, HN, etc","isCompleted":true}
      ]
      }, 
      {
        "name":"Review early feedback and plan next step for roadmap",
        "description":"Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.a",
        "done":false,
        "status":"RoadMap",
        "subtasks":[
          {"name":"interview ten customers", "isCompleted":true},
          {"name":"Review common customer",  "isCompleted":true},
          {"name":"Outline next steps for our roadmap", "isCompleted":true}
        ]
      }]   
  });
   // console.log("columna", columnData);
    if (!columnData) {
        return (
          <div className='Column'>
            <div className='Column__title'>&nbsp;</div>
            <button
              className='Column__addNewButton'
            >
              + New Column
            </button>
          </div>
        );
    }
    return (
        <div className='Column'>
        <div className='Column__title'>
            <span className={`Column__title-ball Column__title-ball`}></span>
            <span className='Column__title-text' title={columnData.name}>
            {columnData.name}({columnData.tasks?.length})
            </span>
        </div>

            {columnData.tasks?.map((cardData:ITask, index:number) => (
             <Card cardData={cardData} />  
            ))
            } 
        </div>
    )
}

export default Column