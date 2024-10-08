import { ReactElement, ReactNode } from 'react';
import { Backdrop, Box, Fade, IconButton, Modal, styled, Typography } from '@mui/material';
import { CloseRounded } from '@mui/icons-material';

const ModalContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  maxWidth: theme.breakpoints.values.sm,
  transform: 'translate(-50%, -50%)',
  background: theme.palette.primary.main,
  padding: 16,
  borderRadius: 8,
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
}));

interface Props {
  open: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
}

const ConfirmationModal = ({ open, title, onClose, children }: Props): ReactElement => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          TransitionComponent: Fade,
        },
      }}
    >
      <ModalContainer>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography sx={{ pl: 2 }} variant="h3" color="#fff">
            {title}
          </Typography>
          <IconButton onClick={onClose}>
            <CloseRounded color="secondary" fontSize="large" />
          </IconButton>
        </Box>
        <Box padding={2}>{children}</Box>
      </ModalContainer>
    </Modal>
  );
};

export default ConfirmationModal;
