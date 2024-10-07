import {ReactElement, ReactNode} from 'react';
import {Box, Divider, Typography} from '@mui/material';
import BreadcrumbLink from '../breadcrumbs/breadcrumb-link';
import {BreadcrumbLinkProps} from '../breadcrumbs/types';

interface Props {
  title: string;
  linkProps: BreadcrumbLinkProps;
  children: ReactNode;
}

const ContainerWithLink = ({title, linkProps, children}: Props): ReactElement => {
  return (
    <Box sx={{pt: 6}} display="flex" flexDirection="column" gap={5}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h2">{title}</Typography>
        <Divider sx={{ flexGrow: 1, ml: 4 }}/>
        <BreadcrumbLink {...linkProps}/>
      </Box>
      {children}
    </Box>
  );
};

export default ContainerWithLink;
