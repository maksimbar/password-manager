import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";
import {
  Wrapper,
  Form,
  Heading,
  SubHeading,
  Header,
  Span,
  ContainerFooter,
  Activator,
} from "./Auth.styles";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { signin, signup } from "../../actions/auth";
import Button from "../../components/Button/Button";

const initialState = { email: "", password: "", confirmPassword: "" };

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup(formData, navigate));
    } else {
      dispatch(signin(formData, navigate));
    }
  };

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
      dispatch({ type: "AUTH", data: { result, token } });

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = (error) => {
    console.log("Google Sign In was unsuccessful. Try Again Later");
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Header>
          <Heading>
            {isSignup ? "Create your account" : "Sign in into your account"}
          </Heading>
          <SubHeading>Get your password secured with us</SubHeading>
        </Header>
        <Input
          handleChange={handleChange}
          type={"email"}
          label={"Email Address"}
          name={"email"}
          placeholder="Please enter your Email address"
        />
        <Input
          handleChange={handleChange}
          type={"password"}
          label={"Master Password"}
          placeholder="Please enter the master password"
          name={"password"}
        />
        {isSignup ? (
          <Input
            handleChange={handleChange}
            type={"password"}
            label={"Re-type Master Password"}
            placeholder="Please re-type the master password"
            name={"confirmPassword"}
          />
        ) : null}
        <ContainerFooter>
          <GoogleLogin
            clientId="672712059522-dbsu3ks41npu2sn696eeeil895jckdh4.apps.googleusercontent.com"
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePOlicy="single_host_origin"
          />
          <Button
            content={isSignup ? "Create Account" : "Sign In"}
            size={"100%"}
          />
          <Span onClick={switchMode}>
            {isSignup ? `Already have an account?` : "Don't have an account?"}
            <Activator>{isSignup ? "Sign In" : "Sign Up"}</Activator>
          </Span>
        </ContainerFooter>
      </Form>
    </Wrapper>
  );
};

export default Auth;
