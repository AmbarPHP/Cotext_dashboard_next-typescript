import { Link } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { IBoardItem } from '../types';

type Props = IBoardItem & {
  selected?: boolean;
  onClick?: () => void;
};

export const BoardItem: React.FC<Props> = ({
route,
  literal,
  Icon,
  selected,
}) => {

 
  const link = (
    <ListItem
      button
      selected={selected}
      sx={{
        '&.Mui-selected': {
          backgroundColor: 'primary.main',
          color: 'primary.light',
          borderRadius:'16px',
        },
        '&:hover': {
          backgroundColor: 'secondary.main',
          color: 'primary.light',
          borderRadius:'16px',
        },
      }}
     
    >
      <ListItemIcon
        sx={[
          { minWidth: 'auto' },
          (theme) => ({
            paddingRight: theme.spacing(2),
          }),
        ]}
      >
        <Icon sx={{ color: 'primary.light' }} />
      </ListItemIcon>
      
      <ListItemText primary={literal} />
    </ListItem>
  );

  return route
    ? <Link to={route}>{link}</Link>
    : link;
};
