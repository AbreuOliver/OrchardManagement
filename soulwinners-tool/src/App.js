import React, { Component } from "react";
import Header from "./components/header";
import logo from "./logo.svg";
import "./db.json";
import "./App.css";

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        soulWinningContacts: []
      };
  }
  // post-mount access (the last step in the birth/mount lifecycle phase)
  componentDidMount() {
    let url = "http://localhost:3000/soulWinningContacts"
    fetch(url)
      .then(response => response.json())
      .then(data => {
        let soulWinningContacts = data.map((soulWinningContacts, index) => {
          return (
            <div className="contact-data" key="index">
              <p>
                # {soulWinningContacts.id} Name: {soulWinningContacts.firstName} {soulWinningContacts.lastName}
              </p>
            </div>
          )
        })
        this.setState({soulWinningContacts: soulWinningContacts});
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Soul Winner's App
          </h1>
          <div>
            {this.state.soulWinningContacts}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
