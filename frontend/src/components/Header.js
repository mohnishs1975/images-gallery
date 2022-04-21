import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'

const navbarStyle = {
    backgroundColor: 'lightblue'
}

const Header = ({ title }) => {
    return (
        <Navbar style={navbarStyle} bg="lightblue" expand="lg">
            <Container>
                <Navbar.Brand href="#home">{title}</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header;