import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    Navbar,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
} 
from 'reactstrap'
export const Menu=()=>{
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div>
            <Navbar color="dark" light expand="md">
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink to={"/"} className="nav-link text-white">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to={"/products"} className="nav-link text-white">Products</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div >
    );
}
export default Menu