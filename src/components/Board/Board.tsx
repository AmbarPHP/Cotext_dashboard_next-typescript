import Modal from '@mui/material/Modal';
import React from 'react'

function Board() {
  return (
    <Modal
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <div className={`Board`}>
      <p className='Board__txt'>This board is empty. Create a new column to get started.</p>
      <div className='Board--noItem__btn'>
        <button
        >
          &nbsp; + Create New Board &nbsp;
        </button>
      </div>
    </div>
    </Modal>
  );

}

export default Board