import React from 'react';
import { Link } from 'react-router';

class RegisterForm extends React.Component {
  render() {
    return (
      <form className="picogram-registerform">
        <h2 className="picogram-title">New user? Register!</h2>
        <label htmlFor="picogram-registerform-email">e-mail</label>
        <input type="text" name="email" id="picogram-registerform-email" />
        <label htmlFor="picogram-registerform-username">username</label>
        <input type="text" name="username" id="picogram-registerform-username" />
        <label htmlFor="picogram-registerform-password">password</label>
        <input type="password" name="password" id="picogram-registerform-password" />
        <button id="picogram-registerform-button">register</button>
        <Link to="/">cancel</Link>
      </form>
    );
  }
}

export default RegisterForm;
