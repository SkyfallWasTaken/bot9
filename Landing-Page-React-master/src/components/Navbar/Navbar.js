// Navbar.js
import React, { useState, useEffect } from 'react';
import { Nav, NavbarContainer, NavLogo, NavIcon, HamburgerIcon, NavMenu, NavItem, NavLinks, NavItemBtn, NavBtnLink } from './Navbar.elements';
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';

// Import your image
import yourLogoImage from '../../images/1.png';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const [homeClick, setHomeClick] = useState(false);
    const [servicesClick, setServicesClick] = useState(false);
    const [productsClick, setProductsClick] = useState(false);

    const handleHomeClick = () => {
        setHomeClick(true);
        setProductsClick(false);
        setServicesClick(false);
    };
    const handleServicesClick = () => {
        setHomeClick(false);
        setProductsClick(false);
        setServicesClick(true);
    };
    const handleProductsClick = () => {
        setHomeClick(false);
        setProductsClick(true);
        setServicesClick(false);
    };

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        // Adjust button visibility based on window width
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to='/'>
                            <NavIcon src={yourLogoImage} alt='Logo' />
                        </NavLogo>
                        <HamburgerIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </HamburgerIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem onClick={handleHomeClick} homeClick={homeClick}>
                                <NavLinks to='/' onClick={closeMobileMenu}>
                                    Home
                                </NavLinks>
                            </NavItem>
                            <NavItem onClick={handleServicesClick} servicesClick={servicesClick}>
                                <NavLinks to='/services' onClick={closeMobileMenu}>
                                    Services
                                </NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;
