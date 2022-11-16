import { useLocation } from 'react-router-dom';
import { List, Grid} from '@mui/material';


import { MenuItem } from './MenuItem';
import { IMenuItem } from '../types';
import ThemeButton from './Header/ThemeButton';


export const MenuItemsList = ({ items = [] }: { items?: IMenuItem[] }) => {
  const { pathname } = useLocation();

  if (!items.length) return null;

  
  return (
    <Grid sx={{
        backgroundColor: 'primary.main',
        color: 'primary.light',
        height:'100vh',
        
      }}>
      
      <List sx={{ p: 0 }}>
        {items.map(({ literal, route, Icon }) => (
          <MenuItem
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

