import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <Navbar bg="light" data-bs-theme="light">
        <Container>
        <Navbar.Brand as={Link} to="/">RestroApp</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link as={Link} to ="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/About">About</Nav.Link>
            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header