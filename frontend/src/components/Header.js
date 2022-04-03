import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'

const Header = ({ title }) => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">{title}</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header;