import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import logo from "../../assets/crown.svg";
import { User } from "../../common/interfaces/user";
import { auth } from "../../common/firebase/firebase.utils";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.reducer";

export const Header = () => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/contact" className="option">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/auth" className="option">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};
