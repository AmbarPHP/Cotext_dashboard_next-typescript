import Button from '@mui/material/Button'
import React from 'react';
import { Link, styled, Typography } from '@mui/material';
import ButtonBase from '@mui/material/ButtonBase';


function NewTaskButton(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const ImageButton = styled(ButtonBase)(({ theme }) => ({

    height: 50,
    width:120,
    borderRadius:"18px",
    padding:10,
    background: theme.palette.secondary.main,
    color: theme.palette.primary.light,
    Typography:{

    }
    
  }));
  return (
    <ImageButton onClick={handleOpen} >
      <Link href="/newtask">Add New Task +</Link>
    </ImageButton> 
  )
}

export default NewTaskButton