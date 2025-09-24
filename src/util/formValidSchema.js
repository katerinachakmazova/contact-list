import * as yup from 'yup';

export const validSchema = yup.object().shape({
  fName: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email'),
  phone: yup
    .string()
    .min(7, 'Phone number is too short')
    .max(20, 'phone number is too long')
    .matches(
      /^\+?[\d()-]+$/,
      'Phone number must only include numbers and +, (, ), -(optional)'
    )
    .required('Phone number is required'),
});
