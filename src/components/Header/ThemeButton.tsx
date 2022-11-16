import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";
import React, { useContext } from "react";
/* import { ThemeContext } from '../contexts/ThemeContext/index'; 
import BedtimeIcon from '@mui/icons-material/Bedtime';
import Brightness7Icon from '@mui/icons-material/Brightness7';*/

function ThemeButton() {
  /*  const {logo} = useContext(ThemeContext); */
  const dark: Boolean = true;
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="end">
      {/* <svg data-testid={Brightness7Icon}></svg>  */}

      <h1>{"🌙"}</h1>

      <Switch defaultChecked />

      <h1>{"🌞"}</h1>
    </Grid>
  );
}

export default ThemeButton;
