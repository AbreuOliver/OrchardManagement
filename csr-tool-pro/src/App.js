import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

import Navbar from "./components/layout/Navbar/index";
import Sidebar from "./components/layout/Sidebar/index";
import Dashboard from "./components/dashboard/Dashboard.js";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import BookSeat from "./components/projects/BookSeat";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="App-divided">
            <Sidebar className="sidebar"/>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              {/* <Route path="/general-public" component={GeneralPublic} /> */}
              <Route path="/sign-in" component={SignIn} />
              <Route path="/sign-up" component={SignUp} />
              <Route path='/reserve' component={BookSeat} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
