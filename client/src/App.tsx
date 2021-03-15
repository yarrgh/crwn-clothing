import React, { useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser, userActions } from "./store/user/userSlice";
import { Header } from "./components/header/header.component";
import { Home } from "./pages/home/home.component";
import { ShopPage } from "./pages/shop/shop.component";
import { Auth } from "./pages/auth/auth.component";
import { CheckoutPage } from "./pages/checkout/checkout.component";

export function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(userActions.checkUserSession());
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
