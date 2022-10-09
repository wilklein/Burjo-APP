import {Navbar, Nav,NavDropdown, Container} from 'react-bootstrap';
import React from 'react';
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './Home/Home';
import Product from './Products/Product';
const NavbarComponents = ()=>{
    return(
    <div>
      <>
      <Navbar variant='dark' expand="lg">
            <Container>
              <Navbar.Brand as={Link} to="/Home"><strong>Burjo App</strong></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/Home">Home</Nav.Link>
                  <Nav.Link as={Link} to="/Product">Product</Nav.Link>
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
    </>
    <div>
      <Routes>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Product' element={<Product/>}></Route>
      </Routes>
    </div>
    </div>

    )
  
}
export default NavbarComponents;