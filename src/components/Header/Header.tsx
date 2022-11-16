import { AppBar, Toolbar, IconButton, Typography, useTheme } from '@mui/material';
import { Menu as MenuIcon, ChevronLeft as ChevronLeftIcon } from '@mui/icons-material';

import { useDrawerContext } from '../../contexts/drawer-context';

import NewTaskButton from './NewTaskButton';
import BrandIcon from './BrandIcon';

export const Header = () => {
  const { isOpened, toggleIsOpened } = useDrawerContext();
  const theme = useTheme();
  return (
    <AppBar
      sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText' }}
    >
      <Toolbar>

        <IconButton
          color="inherit"
          onClick={() => toggleIsOpened(!isOpened)}
          sx={{ padding: theme.spacing(1) }}
        >
          {isOpened ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
        <BrandIcon></BrandIcon>
        <Typography variant="h6" sx={{ margin: 'auto' }}>
          Plataform Launch
        </Typography>
        <NewTaskButton/>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
