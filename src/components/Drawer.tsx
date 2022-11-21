import { useMediaQuery, useTheme, Drawer as MuiDrawer, styled } from '@mui/material';
import { useDrawerContext } from '../contexts/drawer-context';
import { BoardList } from './BoardList';

//Todo: estilo del menu lateral
//usa styled-component de material UI
const StyledDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'isOpened',
})<{ isOpened: boolean }>(({ isOpened, theme }) => ({
  width: isOpened ? 240 : theme.spacing(7),
  height: '100%',
  overflow: 'auto',
  transition: isOpened
    ? theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      })
    : theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
  '& .MuiDrawer-paper': {
    background: '#ff888ff',//color del background
    position: 'static',
    overflowX: 'hidden'
  },
}));

export const Drawer = () => {
  const { isOpened, toggleIsOpened, menu } = useDrawerContext();
  const theme = useTheme();

  //TODO: Establece un brakepoint MD-UI
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <StyledDrawer
      variant={isLargeScreen ? 'permanent' : 'temporary'}
      open={!isLargeScreen && isOpened ? true : false}
      onClose={() => toggleIsOpened(!isOpened)}
      isOpened={isOpened}
    >
  
      <BoardList/>
    </StyledDrawer>
  );
};
