import React from 'react'
import Card from './Card';

function Column() {
    const columnData={
        name:"RoadMap",
        tasks:[
          {name:"Launch vertion one", 
          description: "No description",
          subtask:[{name:"launch privately our waitlist"},
                   {name:"launch publicly on PH, HN, etc"}]
          }, 
          {name:"Review early feedback and plan next step for roadmap",
          description:"Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.a",
          subtask:[{name:"interview ten customers"},
          {name:"Review common customer"},
          {name:"Outline next steps for our roadmap"}]
          },
          
    };
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
            {columnData.tasks?.map((cardData, index) => (
              //aqui recorremos todas las posibles tarjetas que tiene la columna
              <Card cardData={cardData} />
            ))}
        </div>
    )
}

export default Column