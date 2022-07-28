import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.styles.scss';

import { googleSignInStart,emailSignInStart } from "../../redux/user/user.actions";

const SignIn = () => {
  const [userCredentials,setCredentials]=useState({email:'',password:''})
  const { email, password } = userCredentials;
  const dispatch = useDispatch();
  const googleSignInStartHandler = () => {
    dispatch(googleSignInStart())
  }
  const handleSubmit = async (event) => {
    event.preventDefault();

    
    dispatch(emailSignInStart({ email, password }));
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentials({...userCredentials, [name]: value });
  };

    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={email}
            handleChange={handleChange}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            handleChange={handleChange}
            label="password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit" value="Submit Form">
              Sign In{" "}
            </CustomButton>
            <CustomButton
              type="button"
              onClick={googleSignInStartHandler}
              isGoogleSignIn
            >
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
}

// const mapDispatchToProps = (dispatch) => ({
//   googleSignInStart: () => dispatch(googleSignInStart()),
//   emailSignInStart:(email,password)=> dispatch(emailSignInStart({email, password}))
// });

export default SignIn;