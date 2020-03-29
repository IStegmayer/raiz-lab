import React, { useState, useContext } from "react";
import { AuthContext } from "../App";

import { withRouter, NavLink} from 'react-router-dom';

import Logo from "../assets/logo.svg";
import LogoSmall from "../assets/logoSmall.svg";
import CustomButton from "./custom-button.component";

import firebase, { auth } from '../firebase/firebase.utils';
import { HeaderContainer, LogoContainer } from "./styles/header.styles";
import { useWindowSize } from "../hooks/windows-resize";


const Header = ({ history }) => {
    const [error, setErrors] = useState("");

    const Auth = useContext(AuthContext);
    const handleSignOut = () => {

        auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
          .then(() => {
            auth.signOut()
            .then(res => {
              console.log(res)
              history.push('/')
              Auth.setLoggedIn(false);
            })
            .catch(e => {
              setErrors(e.message);
            });
          })

    };

    return (
        <HeaderContainer>
            <LogoContainer to="/">
                {useWindowSize()[0] > 800 ? <Logo /> : <LogoSmall />}
            </LogoContainer>
            <NavLink to="/shop">SHOP</NavLink>
            <NavLink to="/checkout">CHECKOUT</NavLink>
            <NavLink to="/auth">SIGNIN</NavLink>
            <CustomButton onClick={handleSignOut}>SIGNOUT</CustomButton>
        </HeaderContainer>
    )
}

export default withRouter(Header);