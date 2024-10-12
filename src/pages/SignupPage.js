import React from 'react';
import SignupForm from '../components/SignupForm';

const SignupPage = ({ setIsLoggedIn }) => {
  return (
    <div className="signup-page-container">
      <h2>Sign Up</h2>
      <SignupForm setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
};

export default SignupPage;
