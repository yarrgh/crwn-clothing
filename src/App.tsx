import React from "react";
import "./App.css";
import { Home, Shop } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" exact component={Shop} />
      </Switch>
    </Router>
  );
}

export default App;
