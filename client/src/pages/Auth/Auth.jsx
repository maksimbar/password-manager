import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextInput, PasswordInput } from '../../components/Input/Input';
import { useForm, FormProvider } from 'react-hook-form';
import { validationSchema } from '../../helpers/ValidationSchemas';
import {
  Wrapper,
  Form,
  Heading,
  SubHeading,
  Header,
  Span,
  ContainerFooter,
  Activator,
  GoogleButton,
  GoogleImg,
  ErrorMsg
} from './Auth.styles';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { signin, signup } from '../../actions/auth';
import Button from '../../components/Button/Button';
import googleLogo from '../../assets/img/google-logo.png';

const initialState = { email: '', password: '', confirmPassword: '' };

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: 'AUTH', data: { result, token } });

      navigate('/vault');
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = () => {
    console.log('Google Sign In was unsuccessful. Try Again Later');
  };

  const validationOpt = validationSchema(isSignup);

  const methods = useForm(validationOpt);

  const { errors } = methods.formState;

  function onFormSubmit() {
    if (isSignup) {
      dispatch(signup(formData, navigate, setLoading));
    } else {
      dispatch(signin(formData, navigate, setLoading));
    }
    setLoading(true);
  }

  return (
    <Wrapper>
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onFormSubmit)}>
          <Header>
            <Heading>{isSignup ? 'Create your account' : 'Sign in into your account'}</Heading>
            <SubHeading>Get your password secured with us</SubHeading>
          </Header>
          <TextInput
            onChange={handleChange}
            type="email"
            label={'Email Address'}
            name={'email'}
            placeholder="Please enter your Email address"
          />
          <PasswordInput
            onChange={handleChange}
            label={'Master Password'}
            placeholder="Please enter the master password"
            name={'password'}
          />
          <ErrorMsg className="invalid-feedback">{errors.password?.message}</ErrorMsg>
          {isSignup ? (
            <>
              <PasswordInput
                onChange={handleChange}
                label={'Re-type Master Password'}
                placeholder="Please re-type the master password"
                name={'confirmPassword'}
              />
              <ErrorMsg className="invalid-feedback">{errors.confirmPassword?.message}</ErrorMsg>
            </>
          ) : null}
          <ErrorMsg className="invalid-feedback">{errors.passwordConfirm?.message}</ErrorMsg>
          <ContainerFooter>
            <GoogleLogin
              render={(renderProps) => (
                <GoogleButton onClick={renderProps.onClick} disabled={renderProps.disabled}>
                  <GoogleImg src={googleLogo} /> Continue with Google
                </GoogleButton>
              )}
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy="single_host_origin"
            />
            <Button
              loading={loading}
              content={isSignup ? 'Create Account' : 'Sign In'}
              size={'100%'}
            />

            <Span onClick={switchMode}>
              {isSignup ? `Already have an account?` : "Don't have an account?"}
              <Activator>{isSignup ? 'Sign In' : 'Sign Up'}</Activator>
            </Span>
          </ContainerFooter>
        </Form>
      </FormProvider>
    </Wrapper>
  );
};

export default Auth;
