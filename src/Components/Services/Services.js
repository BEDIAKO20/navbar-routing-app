import React from 'react'
import  {Link}  from 'react-router-dom'
import { Nav,Navbar,Container,NavDropdown } from 'react-bootstrap'
import  Cards from '../Cards/Cards'


function Services() {
  return (
    <div>
       <Navbar   bg="dark" variant={'dark'} expand="lg">
<Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
       
            <Nav.Link as={Link} to={"/"} >Home</Nav.Link>
            <Nav.Link as={Link} to={"/services"}>Services</Nav.Link>
            <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Cards/>
    </div>
  )
}

export default Services
