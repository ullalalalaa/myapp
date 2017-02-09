import React from 'react';
import Logo from '../components/Logo';
import RegisterForm from '../components/RegisterForm';

class RegisterPage extends React.Component {
  render() {
    return (
      <div className="picogram-page">
        <div className="picogram-page-register">
          <Logo />
          <RegisterForm />
        </div>
      </div>
    );
  }
}

export default RegisterPage;
