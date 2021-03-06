import React, { useEffect } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import NewPet from "./pages/NewPet";
import NewService from "./pages/NewService";
import DetailsOfPet from "./pages/DetailsOfPet";
import { selectToken, selectAdmin } from "./store/user/selectors";
import Admin from "./pages/Admin";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import { Jumbotron } from "react-bootstrap";

const Other = () => (
  <Jumbotron>
    <h1>Other</h1>
  </Jumbotron>
);
function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  const token = useSelector(selectToken);
  const isAdmin = useSelector(selectAdmin);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={isAdmin ? Admin : Dashboard} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/:id/newpet" component={NewPet} />
        <Route path="/:id/newservice" component={NewService} />
        <Route path="/:id" component={DetailsOfPet} />
      </Switch>
    </div>
  );
}

export default App;
