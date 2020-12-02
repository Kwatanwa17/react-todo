import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';
import { Layout } from './layout';
import {
  Home,
  Login,
  Logout,
  SignUp,
  // Todos,
  VerifyEmail,
  Profile,
  RecoveryPassword,
} from './containers';
import { Loader } from './elements';
const Todos = React.lazy(() => import('./containers/Todos/Todos'));

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth);
  if (!isLoaded(auth)) return <Loader />;
  return children;
}

const App = ({ emailVerified, loggedIn }) => {
  console.log(loggedIn);

  let routes;

  if (loggedIn && !emailVerified) {
    // already logged in but email is not verified
    routes = (
      <Switch>
        <Route exact path="/verify-email" component={VerifyEmail} />
        <Route exact path="/logout" component={Logout} />
        <Redirect to="/verify-email" />
      </Switch>
    );
  } else if (loggedIn && emailVerified) {
    routes = (
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/todos" component={Todos} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/logout" component={Logout} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/recovery-password" component={RecoveryPassword} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <AuthIsLoaded>
      <Layout>{routes}</Layout>
    </AuthIsLoaded>
  );
};

const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth.uid,
  emailVerified: firebase.auth.emailVerified,
});

// const mapDispatchToProps = {};

export default connect(mapStateToProps)(App);
