import { useState } from 'react'
// import reactLogo from '.'
// import viteLogo from '/vite.svg'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Autocomplete from "react-google-autocomplete";
// import Container from 'react-bootstrap/Container';
 import Nav from 'react-bootstrap/Nav';
//  import Navbar from 'react-bootstrap/Navbar';
 import NavDropdown from 'react-bootstrap/NavDropdown';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Navi() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar className="bg-body-tertiary">
      <Container>
      <img src="../src/assets/react.svg" width="28" class="d-inline-block align-top" alt=""/>
        <Navbar.Brand href="#home">Maple University</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <NavDropdown title="Login" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Student</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Professor</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Admin</NavDropdown.Item>
            </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Navi
