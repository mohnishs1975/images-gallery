import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { ReactComponent as Logo } from '../images/logo.svg'

const navbarStyle = {
    backgroundColor: 'lightblue'
}

const Header = ({ title }) => {
    return (
        <Navbar style={navbarStyle} bg="lightblue" expand="lg">
            <Container>
                <Logo alt={title}/>
            </Container>
        </Navbar>
    )
}

export default Header;