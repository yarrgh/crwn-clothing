import React, { useEffect, useState } from "react";
import "./App.css";
import { Auth, Home, Shop } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components";
import { auth } from "./common/firebase/firebase.utils";
import { User } from "./common/interfaces/user";

function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user as User);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Router>
      <Header currentUser={currentUser} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/auth" exact component={Auth} />
      </Switch>
    </Router>
  );
}

export default App;
