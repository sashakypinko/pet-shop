import { ReactElement, SyntheticEvent } from 'react';
import { styled, Tab, Tabs } from '@mui/material';
import { RouteEnum } from '../../../../routes/enums/route.enum';
import { NavbarProps } from '../types';

const StyledTabs = styled(Tabs)({
  display: 'flex',
  alignItems: 'center',
});

const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
  fontSize: 20,
  fontWeight: 500,
  color: theme.palette.text.primary,
}));

const NavbarDesktop = ({ links, page, onPageChange }: NavbarProps): ReactElement => {
  const handlePageChange = (e: SyntheticEvent, newPage: RouteEnum) => {
    onPageChange(newPage);
  };

  const validTabs = links.map(({ url }) => url);

  return (
    <StyledTabs value={validTabs.includes(page) ? page : false} onChange={handlePageChange}>
      {links.map(({ label, url }, index) => (
        <StyledTab key={index} value={url} label={label} />
      ))}
    </StyledTabs>
  );
};

export default NavbarDesktop;
