import { useState } from 'react'
// import reactLogo from '.'
// import viteLogo from '/vite.svg'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
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
          <img src="/logo.png" width="28" class="d-inline-block align-top" alt="" />
          <Navbar.Brand href="/" style={{
            marginLeft: 10
          }}> <strong>Maple University</strong> | Department of Engineering </Navbar.Brand>
          <Navbar.Toggle />
          
        </Container>
      </Navbar>
    </>
  )
}

export default Navi
