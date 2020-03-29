import React, { useState, useEffect } from "react";
import { withRouter, Route, Switch } from 'react-router-dom';

import Header from "./components/header.component";
import ProtectedRouteHoc from "./components/HOC/protectedRouteHOC";

import { firebaseConfig } from './firebase/firebase.utils';
import routes from './routes/routes';
import protectedRoutes from './routes/protectedRoutes';

export const AuthContext = React.createContext(null);

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  function readSession() {
    const user = window.sessionStorage.getItem(
			`firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`
		);
		if (user) setLoggedIn(true)
  };

  useEffect(() => {
    readSession()
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      Is logged in? {JSON.stringify(isLoggedIn)}
      <div className="App">
          <Header />

          <Switch>
            {protectedRoutes.map(route => (
              <ProtectedRouteHoc
                key={route.path}
                isLoggedIn={isLoggedIn}
                path={route.path}
                component={route.main}
                exact={route.exact}
                public={route.public}
              />
            ))}
            {routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </Switch>
      </div>
    </AuthContext.Provider>
  );
};

export default withRouter(App);
