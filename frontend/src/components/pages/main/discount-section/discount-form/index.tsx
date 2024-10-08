import { ReactElement } from 'react';
import { Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import TextField from '../../../../custom-ui/text-field';
import Button from '../../../../custom-ui/button';
import { OrderApi } from '../../../../../services/api/order';
import { IOrder } from '../../../../../services/api/order/dto/order.dto';
import useSnackbar from '../../../../custom-ui/snackbar/hooks/use-snackbar.hook';

const validationSchema = () =>
  Yup.object().shape({
    name: Yup.string().required('Name is required'),
    phone: Yup.string().required('Phone number is required'),
    email: Yup.string().email().required('Email address is required'),
  });

const initialValues: IOrder = {
  name: '',
  phone: '',
  email: '',
  items: [],
};

const DiscountForm = (): ReactElement => {
  const { errorSnackbar } = useSnackbar();

  const handleSubmit = async (values: IOrder, { resetForm, setSubmitting }: FormikHelpers<IOrder>) => {
    try {
      await OrderApi.create(values);
      resetForm();
    } catch (e) {
      errorSnackbar('Something went wrong!');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema} validateOnBlur>
      {({ isSubmitting }) => (
        <Form>
          <TextField placeholder="Name" name="name" fullWidth />
          <TextField placeholder="Phone number" name="phone" fullWidth />
          <TextField placeholder="Email" name="email" fullWidth />
          <Button sx={{ mt: 2 }} type="submit" variant="contained" color="secondary" loading={isSubmitting} fullWidth>
            Get a discount
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default DiscountForm;
