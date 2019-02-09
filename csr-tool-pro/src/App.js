import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

import Navbar from "./components/layout/Navbar/index";
import Sidebar from "./components/layout/Sidebar/index";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import BookSeat from "./components/projects/BookSeat";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Sidebar />
          <Switch>
            {/* <Route exact path="/" component={Dashboard} /> */}
            {/* <Route path="/general-public" component={GeneralPublic} /> */}
            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-up" component={SignUp} />
            <Route path='/book' component={BookSeat} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
