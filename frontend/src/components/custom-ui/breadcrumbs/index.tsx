import type { ReactElement } from 'react';
import { styled, Breadcrumbs as MuiBreadcrumbs, Divider } from '@mui/material';
import { BreadcrumbLinkProps } from './types';
import BreadcrumbLink from './breadcrumb-link';
import useIsMobile from '../../../hooks/use-is-mobile.hook';

const StyledBreadcrumbs = styled(MuiBreadcrumbs)({
  '& .MuiBreadcrumbs-ol': {
    minHeight: 40,
  },
  '& .MuiBreadcrumbs-separator': {
    margin: '0 !important',
  },
});

interface Props {
  links: BreadcrumbLinkProps[];
}

const Breadcrumbs = ({ links }: Props): ReactElement => {
  const isMobile = useIsMobile();

  if (isMobile) {
    const previousPageLink = links[links.length - 2];
    return <BreadcrumbLink url={previousPageLink.url} label="Back" />;
  }

  return (
    <StyledBreadcrumbs separator={<Divider sx={{ width: 16 }} />}>
      {links.map(({ label, url }, index) => (
        <BreadcrumbLink key={index} url={url} disabled={index === links.length - 1} label={label} />
      ))}
    </StyledBreadcrumbs>
  );
};

export default Breadcrumbs;
