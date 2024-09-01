import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, NavLink } from 'react-router-dom';
import '../App.css';

const AppLayout = () => {
  return (
    <div>
      <Navbar expand="lg" variant="dark" className="bg-black">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src="https://blog.kakaocdn.net/dn/c4jzIT/btrghQIPMkh/sByblE0p50HHtMiEDdn8k1/img.png"
              alt="Netflix Logo"
              width="150"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
              <Nav.Link as={NavLink} to="/movies">Movies</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 search-input"
                aria-label="Search"
              />
              <Button variant="danger">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default AppLayout;
