import React from 'react'
import { Link } from 'react-router-dom'
import { Nav,Navbar,Container,NavDropdown } from 'react-bootstrap'
import Slide from '../Slide/Slide'



function Home() {
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
    <Slide/>
    </div>


      // <div className='nav-link'>
      //  <Link to = {"/"} className='nav-item'>Home</Link>
      //    <Link to ={"/services"} className='nav-item'>Services </Link>
      //    <Link to = {"/about"} className='nav-item'>about</Link>
      //    </div>
      // <h1 className='home'>Home</h1>

  
  )
}

export default Home