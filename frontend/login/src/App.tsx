import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import RecoverLogin from "./Pages/RecoverLogin/RecoverLogin";
import NotFound from "./Pages/NotFound/NotFound";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        {/* <Route exact path="/login" component={Login} /> */}
        <Route exact path="/recover" component={RecoverLogin} />
        <Route exact path="/register" component={Register} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
