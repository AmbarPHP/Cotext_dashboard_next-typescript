import { padding } from '@mui/system'
import React, { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'

type PropsSetStatus={
    handleStatus:Dispatch<SetStateAction<string>>;
};

type FormElemEvent = React.FormEvent<HTMLFormElement>;

function Status() {
  const [status, setStatus] = useState<string>("");

    function handleChange(e:ChangeEvent<HTMLSelectElement>): void {
      setStatus(e.target.value);
    }
   
  return (
    <>
    <h5>Status:</h5>
    <select name="status" id="" style={{background:"373737", color:"#635FC7", 
      borderRadius:"16px", height:"40px", width:"100%" ,paddingTop:"10px",paddingBottom:"10px",
      marginTop:"10px"}}
       onChange={(event:React.ChangeEvent<HTMLSelectElement>) => {handleChange(event); console.log("pasamos los cambios y debemos llamar al submit")}}>
        <option value="done">Done</option>
        <option value="Todo">To Do</option>
        <option value="doing">Doing</option>
    </select>
    </>
  )
}

export default Status