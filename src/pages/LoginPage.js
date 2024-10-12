import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = ({ setIsLoggedIn }) => {
  return (
    <div className="login-page-container">
      <h2>Login</h2>
      <LoginForm setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
};

export default LoginPage;
