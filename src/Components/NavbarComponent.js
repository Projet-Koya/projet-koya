import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Logo from '../assets/Logo.png';
import Nav from 'react-bootstrap/Nav';

export default function NavbarComponent() {
    return (
        <Navbar bg="light">
            <Container>
                <NavbarBrand href={"/"}>
                    <img
                        src={Logo}
                        width="40px"
                        height="30px"
                        className="d-inline-block align-top"
                        alt="Logo de Koya"
                    />
                </NavbarBrand>
                <Nav.Link href={"/articles"}>Articles</Nav.Link>
                <Nav.Link href={"/blog"}>Blog</Nav.Link>
                <Nav.Link href={"/login"}>Login</Nav.Link>
                <Nav.Link href={"/admin"}>Admin</Nav.Link>
            </Container>
        </Navbar>
    );
}
