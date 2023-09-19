import React from "react";
import icon from '../../image/icon-auto.png';
import { NavHead, Logo, List, Item, Link, LogoText } from "./Header.styled";



const Header = () => {
    return(
        
        <NavHead>

          <Logo>
            <img src={icon} alt="logo-icon" width={44} height={44}/>
            <LogoText>Driver</LogoText>
          </Logo>

          <List>
            <Item>
                <Link to="/">Home</Link>
            </Item>
            <Item>
                <Link to="/catalog">Catalog</Link>
            </Item>
            <Item>
                <Link to="/favorite">Your Favorite</Link>
            </Item>
          </List>

        </NavHead>
    )
}

export default Header;