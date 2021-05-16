import React, { useState } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Menu.styles.css';

const Menu = () => {

    const [collapsed, updateCollapsed] = useState(true);

    const toggleNavbar = () => {
        updateCollapsed(!collapsed);
    }
    return (
        <header>
            <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
                <Container>

                    <NavbarBrand tag={Link} to="/">Text Parser</NavbarBrand>
                    <NavbarToggler onClick={() => toggleNavbar()} className="mr-2" />
                    <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!collapsed} navbar>
                        <ul className="navbar-nav flex-grow">
                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to="/">Upload</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to="/Editor">Editor</NavLink>
                            </NavItem>

                        </ul>
                    </Collapse>
                </Container>
            </Navbar>
        </header>
    );

}

export default Menu;