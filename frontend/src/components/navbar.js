import React, { Component } from 'react';
import {Container, NavItem, NavLink,Nav, Collapse,
        Navbar, NavbarBrand, NavbarToggler} 
        from 'reactstrap';

class AppNavbar extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render(){
        return (
            <div>
                <Navbar color="success" success expand="sm" className="mb-5">
                    Navbar!
                </Navbar>
            </div>
        )
    }
}
export default AppNavbar;