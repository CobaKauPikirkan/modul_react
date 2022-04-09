import React from "react";
import Utama from "./Component/Utama";
import {Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap'; 

class App extends React.Component{
  render(){
    return(
        <div>
          <Navbar bg="light" variant={"light"} expand="xxl">
          <Navbar.Brand className="mx-3">
            <img
              alt=""
              src="/logo512.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

          <Nav.Link as={Link} to={"/"}>Beranda</Nav.Link>
          <Nav.Link as={Link} to={"/tentangsaya"}>About</Nav.Link>
          <Nav.Link as={Link} to={"/karya"}>Karya</Nav.Link>
          <Nav.Link as={Link} to={"/kontak"}>Kontak</Nav.Link>
          <Nav.Link as={Link} to={"/list"}>list</Nav.Link>
          <Nav.Link as={Link} to={"/gallery"}>Gallery</Nav.Link>

          </Nav>
          </Navbar.Collapse>
          </Navbar> 
          <br/> 
          <p align="center"><Utama/></p>
        </div>
    );
  }
}

export default App; 