import React from 'react';

require('./less/style.less');

class MainPage extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Hello!</h1>
      </div>
    );
  }
}

export default MainPage;















// import React from 'react';
// //import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';
//
// import HomePage from './pages/HomePage';
// // import ImagePage from './pages/RegisterPage';
// // import UploadPage from './pages/RegisterPage';
// // import ErrorPage from './pages/ErrorPage';
//
// require('font-awesome/css/font-awesome.css');
// require('./less/style.less');
//
// class Picogram extends React.Component {
//   render() {
//     return (
//       <Router history={hashHistory}>
//         <Route path='/' component={LoginPage} />
//         <Route path='/home' component={ErrorPage} />
//         <Route path='/login' component={LoginPage} />
//         <Route path='/register' component={RegisterPage} />
//         <Route path='/forgot' component={ErrorPage} />
//
//         <Route path='/user' component={ErrorPage} />
//
//       </Router>
//     );
//   }
// }
//
// export default Picogram;
