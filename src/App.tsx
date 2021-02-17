import React, { useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { auth, createUserProfile } from "./common/firebase/firebase.utils";
import { User } from "./common/interfaces/user";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser, setCurrentUser } from "./store/user/userSlice";
import { Header } from "./components/header/header.component";
import { Home } from "./pages/home/home.component";
import { ShopPage } from "./pages/shop/shop.component";
import { Auth } from "./pages/auth/auth.component";
import { CheckoutPage } from "./pages/checkout/checkout.component";

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

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
        <Route path="/shop" component={ShopPage} />
        <Route path="/auth" exact>
          {currentUser ? <Redirect to="/" /> : <Auth />}
        </Route>
        <Route path="/checkout" exact component={CheckoutPage} />
      </Switch>
    </Router>
  );
}

export default App;
