import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';

export const useRequestForm = (fn) => {
  const { isSubmitting, handleSubmit } = useForm({
    initialValues: {
      status: 'active',
    },
  });

  const {
    value: name,
    errorMessage: nError,
    handleBlur: nBlur,
  } = useField('name', yup.string().trim().required('Name is required'));
  const {
    value: phone,
    errorMessage: pError,
    handleBlur: pBlur,
  } = useField('phone', yup.string().trim().required('Phone is required'));
  const {
    value: amount,
    errorMessage: aError,
    handleBlur: aBlur,
  } = useField(
    'amount',
    yup
      .number('Amount is required to be a number')
      .required('Amount is required')
      .min(0, 'Amount required to be greater than 0')
  );
  const { value: status } = useField('status');

  const onSubmit = handleSubmit(fn);

  return {
    isSubmitting,
    onSubmit,

    name,
    nError,
    nBlur,

    phone,
    pError,
    pBlur,

    amount,
    aError,
    aBlur,

    status,
  };
};
