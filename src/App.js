import React, { Component } from "react";
import "./App.css";
import router from "./router";
import store from "./store";
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Router>{router}</Router>
        </div>
      </Provider>
    );
  }
}

export default App;
