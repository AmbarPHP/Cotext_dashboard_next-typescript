import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { fontFamily } from "@mui/system";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from "@mui/material/IconButton";
import "./task.css";
import React, { useState, useRef } from "react";
import { ISubTask ,ITask} from "../../types";
import Grid from "@mui/material/Grid";

/* https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example#basic-prop-types-examples */


function Form() {
  type FormElemEvent = React.FormEvent<HTMLFormElement>;

  //TODO: mover a una carpeta llamada types
  const [title, setNewTitle] = useState<string>("");
  const [description, setNewDescription] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  
  const [tasks, setTasks] = useState<ITask[]>([]);
  const taskInput = useRef<HTMLInputElement>(null);

  const [subtask, setSubTask] = useState<string>("");
  const [subtasks, setSubTasks] = useState<ISubTask[]>([
    { name: "Barba", isCompleted:true },
    { name: "Celia", isCompleted:true },
  ]);

  

  const addSubTask = (): void => {
    const subtasksList: ISubTask[] = [...subtasks, { name: subtask }];
    setSubTasks(subtasksList);
    console.log("quien debe llamar al submit ?");
  };
  //trato de separar la logica de agragar las subtareas, me resulta dificil agregarlas, por que estan en otro componente
  const addTask = (name: string, description: string, status: string, subtask: ISubTask[]): void => {
    const newTasks: ITask[] = [...tasks, { name, done: false, description, status, subtasks }];
    setTasks(newTasks);
  };

  const toggleDoneTask = (i: number): void => {
    const newTasks: ITask[] = [...tasks];
    newTasks[i].done = !newTasks[i].done;
    setTasks(newTasks);
  };

  const removeTask = (i: number): void => {
    const newTasks: ITask[] = [...tasks];
    newTasks.splice(i, 1);
    setTasks(newTasks);
  };

  const handleSubmit = (e: FormElemEvent): void => {
    e.preventDefault();
    addTask(title, description, status, subtasks);
    setNewTitle("");
    setNewDescription("");
    taskInput.current?.focus();
  };


  return (
    <div>
    <form onSubmit={handleSubmit}
       
        style={{
          height: "100%", width:"90%",
          marginTop: "1%",marginLeft:"5%",marginRight:"5%",
          background: "#373737",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          overflow:"visible"
        }}
      >
        <label style={{ margin: "0px, 0px" }} htmlFor="title">
          Title
        </label>
        <input
          style={{
            height: "40px",
            background: "#373737",
            color: "#979797",
            margin: "0px, 0px",
          }}
          type="text"
          value={title ? title : "e.g coffe break"}
          name="title"
          onChange={(e) => setNewTitle(e.target.value)}
          ref={taskInput}
          required
          autoFocus
        />
        <label
          htmlFor="description"
          style={{ fontFamily: "Rubik", fontSize: "28", marginTop: "0px" }}
        >
          Description
        </label>
        <textarea
          name="description"
          style={{
            height: "60px",
            background: "#373737",
            color: "#979797",
            margin: "0px, 0px",
          }}
          value={
            description
              ? description
              : "e.g its always good to take a breake. This fivething minute brake will recharge the baterry a little"
          }
          onChange={(e) => setNewDescription(e.target.value)}
          required
          autoFocus
        />
    {/* ---------------------------------------------------- */}
    <h5 style={{color:"white"}}>Subtask</h5>
    <ul>
     {
      subtasks.map((item: ISubTask) =>
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
   
    {/* --------------------------------------------------------- */}   
     
    <h5>Status:</h5>
    <select name="status" id="" style={{background:"373737", color:"#635FC7", 
      borderRadius:"16px", height:"40px", width:"100%" ,paddingTop:"10px",paddingBottom:"10px",
      marginTop:"10px"}}
       onChange={(event:React.ChangeEvent<HTMLSelectElement>) => {setStatus(event.target.value);}}>
        <option value="done">Done</option>
        <option value="Todo">To Do</option>
        <option value="doing">Doing</option>
    </select>
    
    {/* --------------------------------------------------------- */}  

    <button
    style={{
    color: "white",
    background: "#635FC7",
    borderRadius: "16px",
    width: "100%",
    paddingTop: "10px",
    paddingBottom: "10px",
    marginTop: "10px",
    }}
    >
    Create Task
    </button>
    </form>

    {/*  {tasks.map((t: ITask, i: number) => (
    <div key={i} className="card card-body mt-2">
    <h2
    style={{
    textDecoration: t.done ? "line-through" : "",
    }}
    >
    {t.name}
    {t.description}
    </h2>
    <div>
    <button
    onClick={() => toggleDoneTask(i)}
    className="btn btn-secondary"
    >
    {t.done ? "✓" : "✗"}
    </button>
    <button onClick={() => removeTask(i)} className="btn btn-danger">
    🗑
    </button>
    </div>
    </div>
    ))} */}
    </div>
  );
}

export default Form;
