import IconButton from "@mui/material/IconButton";
import { borderRadius } from "@mui/system";
import React, { FC, ReactNode } from "react";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { JsxElement } from "typescript";

/* Win+Space */
import { ISubTask } from "../../types";
import Grid from '@mui/material/Grid';

//Cuando pasas props a un child, debes definir sus props como un nuevo tipo
type PropsSubTask = {
  datos: ISubTask[];
};


//Estamos pasando props a un child: FC<PropsSubTask>
function Subtask(): JSX.Element {
  
 

  const [subtask, setSubTask] = useState<string>("");
  const [subtasks, setSubTasks] = useState<ISubTask[]>([
    { name: "Barba" },
    { name: "Celia" },
  ]);

  const addSubTask = (): void => {
    const subtasksList: ISubTask[] = [...subtasks, { name: subtask }];
    setSubTasks(subtasksList);
    console.log("quien debe llamar al submit ?");
  };

  const  datos1= [
    {
      name: "sdfasd",
    },
    {
      name: "sdfasd",
    }
  ];
  return (
  
     <ul>
     {
      datos1.map((item: ISubTask) =>
      <Grid item xs={8}>
      <input name="subtask"
        style={{
          height: "40px",
          background: "#373737",
          color: "#979797",
          margin: "0px, 0px",
          width: "80%",
        }}
        type="text"
        value={item.name
          ? item.name
          : "e.g its always good to take a breake. This fivething minute brake will recharge the baterry a little"}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSubTask(event.target.value)}
        required
        autoFocus />
      <IconButton
        color="inherit"
        /* onClick={() => delete(!isOpene))} */
        sx={{ padding: "2px" }}
      >
        {" "}
        <CloseIcon style={{ color: "#ccc" }} />{" "}
      </IconButton>
      
    </Grid>
       )
     }
     <button onClick={addSubTask} >Add New Subtask+</button>
   </ul>
   
  )
}


export default Subtask;
