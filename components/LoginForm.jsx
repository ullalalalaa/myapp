import React from 'react';
import { Link } from 'react-router';

class LoginForm extends React.Component {
  render() {
    return (
      <form className="picogram-loginform">
        <label htmlFor="picogram-loginform-username">username</label>
        <input type="text" name="username" id="picogram-loginform-username" />
        <label htmlFor="picogram-loginform-password">password</label>
        <input type="password" name="password" id="picogram-loginform-password" />
        <button id="picogram-loginform-button">log in</button>
        <Link to="/forgot">Forgot password?</Link> | <Link to="/register">Register</Link>
      </form>
    );
  }
}

export default LoginForm;
