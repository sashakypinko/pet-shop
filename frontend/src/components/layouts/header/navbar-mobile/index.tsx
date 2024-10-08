import { ReactElement, useState, MouseEvent } from 'react';
import { IconButton, Menu, MenuItem, styled, useTheme } from '@mui/material';
import { MenuRounded } from '@mui/icons-material';
import { RouteEnum } from '../../../../routes/enums/route.enum';
import { NavbarProps } from '../types';

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  textTransform: 'none',
  fontSize: 20,
  fontWeight: 500,
  color: theme.palette.text.primary,

  '&.Mui-selected': {
    color: theme.palette.primary.main,
  },
}));

const NavbarMobile = ({ links, page, onPageChange }: NavbarProps): ReactElement => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePageChange = (newPage: RouteEnum) => {
    onPageChange(newPage);
    handleClose();
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <IconButton onClick={handleClick}>
        <MenuRounded sx={{ color: theme.palette.text.primary, fontSize: 60 }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transformOrigin={{
          horizontal: 'right',
          vertical: 'top',
        }}
        slotProps={{
          paper: { sx: { width: '100%' } },
        }}
      >
        {links.map(({ label, url }, index) => (
          <StyledMenuItem key={index} selected={url === page} onClick={() => handlePageChange(url)}>
            {label}
          </StyledMenuItem>
        ))}
      </Menu>
    </>
  );
};

export default NavbarMobile;
