import React, { Component } from 'react';
import { Navbar, Nav, Form } from 'react-bootstrap';


class MyNavbar extends Component {
    render() {
        return (
            <div>
                <Navbar className="third " variant="dark">
                    <Navbar.Brand className="m-auto" href="#home">
                        Catalog
                    </Navbar.Brand>
                    <Nav className="m-auto">
                        <Nav.Link href="#home">Yeni məhsullar</Nav.Link>
                        <Nav.Link href="#features">Endirimli məhsullar</Nav.Link>
                        <Nav.Link href="#pricing">Elektronika</Nav.Link>
                        <Nav.Link href="#features">Mebel</Nav.Link>
                        <Nav.Link href="#pricing">Geyim</Nav.Link>
                        <Nav.Link href="#pricing">Restoran</Nav.Link>
                        <Nav.Link href="#pricing">Market</Nav.Link>
                        <Nav.Link href="#pricing">Aptek</Nav.Link>

                    </Nav>
                   
                </Navbar>
            </div>
        )
    }
}

export default MyNavbar;