import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom'


export const NavHead = styled.div`
width: 100%;
height: 100px;
display: flex;
justify-content: flex-start;
align-items: center;
`;

export const LogoText = styled.p`
color: #000;
font-family: Roboto;
font-weight: 700;
font-size: 38px;
`;

export const Logo = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
padding-left: 20px;
margin-right: auto;
`;

export const List = styled.ul`
display: flex;
gap: 40px;
list-style-type: none;
justify-content: space-around;
`;

export const Item = styled.li`

`;

export const Link = styled(NavLink)`
color: #000; 
text-decoration: none;
font-family: Roboto;
font-weight: 700;
font-size: 24px;
padding-right: 100px;
transition: color .2s ease-in-out;

&:hover{
    color: #535460;
}
`;