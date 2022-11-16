import { Link } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';

import { IMenuItem } from '../types';

type Props = IMenuItem & {
  selected?: boolean;
  onClick?: () => void;
};

export const MenuItem: React.FC<Props> = ({
route,
  literal,
  Icon,
  selected,
  onClick,
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
      onClick={onClick}
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
