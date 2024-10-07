import {ReactElement, ReactNode} from 'react';
import {Box, Typography} from '@mui/material';
import Breadcrumbs from '../breadcrumbs';
import {BreadcrumbLinkProps} from '../breadcrumbs/types';

interface Props {
  title?: string;
  links?: BreadcrumbLinkProps[];
  children: ReactNode;
}

const ContainerWithBreadcrumbs = ({title, links = [], children}: Props): ReactElement => {
  return (
    <Box sx={{pt: 6}} display="flex" flexDirection="column" gap={5}>
      <Breadcrumbs links={links}/>
      {title && <Typography variant="h2">{title}</Typography>}
      {children}
    </Box>
  );
};

export default ContainerWithBreadcrumbs;
