import React from "react";
import logo from "../../assets/crown.svg";
import { auth } from "../../common/firebase/firebase.utils";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/userSlice";
import { CartIcon } from "../cart-icon/cart-icon.component";
import { CartDropdown } from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../store/cart/cartSlice";
import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
} from "./header.styles";

export const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const cartHidden = useSelector(selectCartHidden);

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <img src={logo} alt="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/auth">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {!cartHidden && <CartDropdown />}
    </HeaderContainer>
  );
};
