import Modal from '@mui/material/Modal';
import React from 'react'
import Column from './Column';

function Board() {
  return (
    //todo, cuando cambias en el menu de pagina--> vamos a dashboard==> que abre board 
    //todo: leemos la cantidad de columnas y las dibujamos
    <div className={`Board`}>
      <p className='Board__txt'>This board is empty. Create a new column to get started.</p>
      <div className='Board--noItem__btn'>
        
          <Column></Column>
        
        <button>
          &nbsp; + Create New Column;
        </button>
      </div>
    </div>
    
  );

}

export default Board