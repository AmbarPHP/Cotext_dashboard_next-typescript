import { useLocation } from 'react-router-dom';
import { List, Grid} from '@mui/material';


import { BoardItem } from './BoardItem';
import { IBoardItem } from '../types';
import ThemeButton from './Header/ThemeButton';
import { MENU_LIST } from '../constants';

import {
  Dashboard as DashboardIcon,
  ShoppingCart as ShoppingCartIcon,
  People as PeopleIcon,
  AttachMoney as AttachMoneyIcon,
} from '@mui/icons-material';

//{ items = [] }: { items?: IBoardItem[] }
export const BoardList = () => {
  const { pathname } = useLocation();

 //TODO: leer los boards creados, leer los rutas  desde archivo de contantes
 //todo, enviar info del board, cols
  const items2=[ {
    route:"/dashboard",
    literal: 'Road Map',
    Icon: DashboardIcon,
    board:{colums:["primera", "segunda"]}
  },
  {
    route:"/dashboard2",
    literal: 'Marketing Plan',
    Icon: DashboardIcon,
    board:{colums:["primera", "segunda"]}
  }, 
  {
    route:"/dashboard2",
    literal: '+ Create New Board',
    Icon: DashboardIcon,
    board:{colums:["primera", "segunda"]}
  },
];


  if (!items2.length) return null;
  
  
  return (
    <Grid sx={{
        backgroundColor: 'primary.main',
        color: 'primary.light',
        height:'100vh',
        
      }}>
      
      <List sx={{ p: 0 }}>
       
        {items2.map(({ literal, route, Icon }) => (
          <BoardItem
            Icon={Icon}
            literal={literal}
            route={route}
            key={route}
            selected={pathname === route}
           
          />
        ))}
       
        <ThemeButton/>
      </List>
    </Grid>
  );
};
function styled(arg0: string) {
  throw new Error('Function not implemented.');
}

