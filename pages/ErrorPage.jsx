import React from 'react';
import Logo from '../components/Logo';
import Error from '../components/Error';

class ErrorPage extends React.Component {
  render() {
    return (
      <div className="picogram-page">
        <div className="picogram-page-error">
          <Logo />
          <Error />
        </div>
      </div>
    );
  }
}

export default ErrorPage;
