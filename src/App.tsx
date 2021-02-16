import React, { useEffect, useState } from "react";
import "./App.css";
import { Auth, Home, Shop } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components";
import { auth, createUserProfile } from "./common/firebase/firebase.utils";
import { User } from "./common/interfaces/user";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./store/user/user.reducer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    let userRefUnsubscribe: any = null;
    const authStateUnsubscribe = auth.onAuthStateChanged(async (authUser) => {
      if (!!userRefUnsubscribe) {
        userRefUnsubscribe();
        userRefUnsubscribe = null;
      }

      if (authUser) {
        const userRef = await createUserProfile(authUser as User);

        userRefUnsubscribe = userRef?.onSnapshot((snapshot) => {
          const data = snapshot.data() as User;
          dispatch(
            setCurrentUser({
              uid: snapshot.id,
              displayName: data.displayName,
              email: data.email,
            } as User)
          );
        });
      } else {
        dispatch(setCurrentUser(null));
      }
    });

    return () => {
      if (!!userRefUnsubscribe) {
        userRefUnsubscribe();
      }
      authStateUnsubscribe();
    };
  }, []);

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/auth" exact component={Auth} />
      </Switch>
    </Router>
  );
}

export default App;
