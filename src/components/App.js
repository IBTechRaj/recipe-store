import React, { Component } from "react";
import { Provider } from "react-redux";
import "./App.css";

import Navbar from "./Navbar";
import RecipesContainer from "../containers/RecipesContainer";
import Recipe from "../containers/Recipe";
import Footer from "./Footer";
import { HashRouter as Router, Route } from "react-router-dom";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container-fluid">
            <Navbar />
            <Route exact path="/" component={RecipesContainer} />
            <Route exact path="/recipe/:id" component={Recipe} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
