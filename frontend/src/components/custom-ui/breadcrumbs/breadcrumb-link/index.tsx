import type { ReactElement } from 'react';
import { styled } from '@mui/material';
import { Link } from 'react-router-dom';
import { BreadcrumbLinkProps } from '../types';

interface StyledLinkProps {
  disabled: 1 | 0;
}

const StyledLink = styled(Link)<StyledLinkProps>(({ theme, disabled }) => ({
  width: 'fit-content',
  border: '1px solid',
  borderColor: theme.palette.text.disabled,
  borderRadius: 6,
  fontWeight: 500,
  padding: '4px 16px',
  color: theme.palette.text[disabled ? 'primary' : 'secondary'],
  textDecoration: 'none',
  transition: 'all 0.25s ease-in-out',

  '&:hover': {
    fontSize: 17,
    padding: '6px 20px',
  },
}));

const BreadcrumbLink = ({ label, url = '', disabled }: BreadcrumbLinkProps): ReactElement => {
  return (
    <StyledLink to={url} disabled={disabled ? 1 : 0}>
      {label}
    </StyledLink>
  );
};

export default BreadcrumbLink;
