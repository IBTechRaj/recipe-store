import React, { Component } from "react";
import "./App.css";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { HashRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      // <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          {/* <Route exact path="/" component={Landing} />
            <Route exact path="/movie/:id" component={Movie} /> */}
          <Footer />
        </div>
      </Router>
      // </Provider>
    );
  }
}
export default App;
