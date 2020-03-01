import React from "react";
import Logo from "../assets/logo.svg";
import LogoSmall from "../assets/logoSmall.svg";
import { HeaderContainer, LogoContainer } from "./styles/header.styles";
import { useWindowSize } from "../hooks/windows-resize";


const Header: React.FC<{}> = () => {
    return (
        <HeaderContainer>
            <LogoContainer to="/">
                {useWindowSize()[0] > 800 ? <Logo /> : <LogoSmall />}
            </LogoContainer>
        </HeaderContainer>
    )
}

export default Header;