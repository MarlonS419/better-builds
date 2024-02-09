import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import AuthenticatedRoute from "./authentication/AuthenticatedRoute";
import getCurrentUser from "../services/getCurrentUser";
import "../assets/scss/main.scss";
import RegistrationForm from "./registration/RegistrationForm";
import SignInForm from "./authentication/SignInForm";
import TopBar from "./layout/TopBar";
import BuildsList from "./layout/BuildsList";
import BuildForm from "./layout/BuildForm";
import BuildShow from "./layout/BuildShow";
import UserShow from "./layout/UserShow";

const App = (props) => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const fetchCurrentUser = async () => {
    try {
      const user = await getCurrentUser()
      setCurrentUser(user)
    } catch(err) {
      setCurrentUser(null)
    }
  }

  useEffect(() => {
    fetchCurrentUser()
  }, [])

  return (
    <Router>
      <TopBar user={currentUser} />
      <Switch>
        <Route exact path="/">
          <BuildsList />
        </Route>
        <Route exact path="/users/new" component={RegistrationForm} />
        <Route exact path="/user-sessions/new" component={SignInForm} />
        <AuthenticatedRoute exact path="/builds/new" component={BuildForm} user={currentUser} />
        <AuthenticatedRoute exact path="/builds/edit/:id" component={BuildForm} user={currentUser} editingBuild={true}/>
        <Route exact path="/builds/:id" component={BuildShow} />
        <AuthenticatedRoute exact path="/profile" component={UserShow} user={currentUser}/>
      </Switch>
    </Router>
  );
};

export default hot(App);