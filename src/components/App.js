import React, { Component } from "react";
import { Provider } from "react-redux";
import "./App.css";

import Navbar from "./Navbar";
import RecipesContainer from "../containers/RecipesContainer";
import Footer from "./Footer";
import { HashRouter as Router, Route } from "react-router-dom";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={RecipesContainer} />
            {/* <Route exact path="/movie/:id" component={Movie} />  */}
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
