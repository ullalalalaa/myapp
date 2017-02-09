import React from 'react';
import Logo from '../components/Logo';
import LoginForm from '../components/LoginForm';

class LoginPage extends React.Component {
  render() {
    return (
      <div className="picogram-page">
        <div className="picogram-page-login">
          <Logo />
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default LoginPage;
