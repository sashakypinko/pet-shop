import { ReactElement, useState } from 'react';
import { Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import TextField from '../../../../custom-ui/text-field';
import Button from '../../../../custom-ui/button';
import useSnackbar from '../../../../custom-ui/snackbar/hooks/use-snackbar.hook';
import { Box, styled, Typography } from '@mui/material';
import { GetDiscountRequestDto } from '../../../../../services/api/discount/dto/get-discount-request.dto';
import { DiscountApi } from '../../../../../services/api/discount';
import ConfirmationModal from '../../../../custom-ui/confirmation-modal';

const StyledTextField = styled(TextField)({
  '& .MuiInputBase-root': {
    background: 'none',
    color: '#fff',
  },
});

const validationSchema = () =>
  Yup.object().shape({
    name: Yup.string().required('Name is required'),
    phone: Yup.string().required('Phone number is required'),
    email: Yup.string().email().required('Email address is required'),
  });

const initialValues: GetDiscountRequestDto = {
  name: '',
  phone: '',
  email: '',
};

const DiscountForm = (): ReactElement => {
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);

  const { errorSnackbar } = useSnackbar();

  const handleSubmit = async (
    values: GetDiscountRequestDto,
    { resetForm, setSubmitting }: FormikHelpers<GetDiscountRequestDto>,
  ) => {
    try {
      await DiscountApi.getDiscount(values);
      resetForm();
      setShowConfirmation(true);
    } catch (e) {
      errorSnackbar('Something went wrong!');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema} validateOnBlur>
        {({ isSubmitting }) => (
          <Form>
            <StyledTextField placeholder="Name" name="name" fullWidth />
            <StyledTextField placeholder="Phone number" name="phone" fullWidth />
            <StyledTextField placeholder="Email" name="email" fullWidth />
            <Button sx={{ mt: 2 }} type="submit" variant="contained" color="secondary" loading={isSubmitting} fullWidth>
              Get a discount
            </Button>
          </Form>
        )}
      </Formik>
      <ConfirmationModal open={showConfirmation} title="Thank you!" onClose={() => setShowConfirmation(false)}>
        <Box display="flex" flexDirection="column" marginRight={8} gap={2}>
          <Typography variant="subtitle1" color="#fff">
            Your 5% discount code has been sent to your email. Please check your inbox and enjoy your first order!
          </Typography>
        </Box>
      </ConfirmationModal>
    </>
  );
};

export default DiscountForm;
