import * as React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import Header from "./components/header.component";

const App: React.FC = () => {
  return (
    <>
    <Header />
    <Switch>
      <Route exact path="/" />
      <Route path="/shop" />
      <Route exact path="/checkout" />
      <Route exact path="/signin" />
      <Route exact path="/search" />
    </Switch>
    </>
  )
};

export default withRouter(App);
