import type { ReactElement } from 'react';
import { styled, Breadcrumbs as MuiBreadcrumbs, Divider } from '@mui/material';
import { BreadcrumbLinkProps } from './types';
import BreadcrumbLink from './breadcrumb-link';

const StyledBreadcrumbs = styled(MuiBreadcrumbs)({
  '& .MuiBreadcrumbs-separator': {
    margin: '0 !important',
  },
});

interface Props {
  links: BreadcrumbLinkProps[];
}

const Breadcrumbs = ({ links }: Props): ReactElement => {
  return (
    <StyledBreadcrumbs separator={<Divider sx={{ width: 16 }} />}>
      {links.map(({ label, url }, index) => (
        <BreadcrumbLink key={index} url={url} disabled={index === links.length - 1} label={label} />
      ))}
    </StyledBreadcrumbs>
  );
};

export default Breadcrumbs;
