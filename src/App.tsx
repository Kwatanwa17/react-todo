import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';
import { Layout } from './layout';
import { Home, Login, SignUp, Todos } from './containers';

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth);
  if (!isLoaded(auth)) return <div>ロードしています</div>;
  return children;
}

const App = ({ loggedIn }) => {
  console.log(loggedIn);

  let routes;
  if (loggedIn) {
    routes = (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/todos" component={Todos} />
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
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
  loggedIn: firebase.auth.uid ? true : false,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps)(App);
