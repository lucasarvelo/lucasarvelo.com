import React, {useState} from 'react'
import styled from 'styled-components'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <HeaderStyled>
            <Navbar>
                <NavLogo>
                    Lucas Arvelo    
                </NavLogo>
                <NavMenu left={isMenuOpen ? "0" : "-100%"}>
                    <NavItem><NavLink>Home</NavLink></NavItem>
                    <NavItem><NavLink>About</NavLink></NavItem>
                    <NavItem><NavLink>Projects</NavLink></NavItem>
                    <NavItem><NavLink>Contact</NavLink></NavItem>
                </NavMenu>
                <Hamburger onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <HamburgerBar transform={isMenuOpen ? "translateY(8px) rotate(45deg)" : ""}></HamburgerBar>
                    <HamburgerBar opacity={isMenuOpen ? "0" : "100"}></HamburgerBar>
                    <HamburgerBar transform={isMenuOpen ? "translateY(-8px) rotate(-45deg)" : ""}></HamburgerBar>
                </Hamburger>
            </Navbar>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    border-bottom: 1px solid #E2E8F0;
`
const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    aling-items: center;
    padding: 1rem 1.5rem;
`
const NavLogo = styled.nav`
    font-size: 2.1rem;
    font-weight: 500;
    color: #482ff7;
`
const NavMenu = styled.ul`
    display: flex;
    justify-content: space-between;
    aling-items: center;
    @media only screen and (max-width: 768px) {
        position: fixed;
        left: ${props => props.left};
        top: 5rem;
        flex-direction: column;
        background-color: #fff;
        width: 100%;
        border-radius: 10px;
        text-align: center;
        transition: 0.3s;
        box-shadow:
            0 10px 27px rgba(0, 0, 0, 0.05);
    }
`
const NavItem = styled.li`
    margin-left: 5rem;
    @media only screen and (max-width: 768px) {
        margin: 2.5rem 0;
    }
`
const NavLink = styled.a`
    font-size:1.6rem;
    font-weight: 400;
    color: #475569;
    cursor: pointer;
    &:hover {
        color: #482ff7;
    }
`
const Hamburger = styled.div`
    display:none;
    @media only screen and (max-width: 768px) {
        display: block;
        cursor: pointer;
    }
`
const HamburgerBar = styled.span`
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    transition: all 0.3s ease-in-out;
    background-color: #101010;
    transform: ${props => props.transform};
    opacity: ${props => props.opacity};
`;

export default Header;
