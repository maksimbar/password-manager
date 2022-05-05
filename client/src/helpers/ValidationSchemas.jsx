import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const signUpSchema = Yup.object().shape({
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password length should be at least 8 characters'),
  confirmPassword: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password')], 'Passwords must and should match')
});

const signInSchema = Yup.object().shape({
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password length should be at least 8 characters')
});

export const validationSchema = (isSignup) => {
  return { resolver: yupResolver(isSignup ? signUpSchema : signInSchema) };
};
