import React, {Component} from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, Container } from 'reactstrap';

class AppNavBar extends Component{
    state= {
        isOpen : false
    }

    toggle = () =>{
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render(){
        return(
            <div>
                <Navbar color='dark' dark expand="md" className='mb-4'>
                    <Container>
                        <NavbarBrand href='/'>ShoppingList</NavbarBrand>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className='ml-auto' navbar>
                                <NavItem >
                                    <NavLink href='http://www.google.com/'>Google</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default AppNavBar