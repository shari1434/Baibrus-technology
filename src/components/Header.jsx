import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import TopBar from "./TopBar";
import { useState } from "react";

const Header = () =>  {
  const [showNav, setShowNav] = useState(false);

  const closeNav = () => {
    setShowNav(false);
  };

  return (
    <>
      <div className="fixed-top">
        <TopBar />
      </div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <div className="ps-4 container-fluid d-flex align-items-center justify-content-between py-4 fixed-top mt-5 bg-light">
            <div>
              <img
                src="/logo-baibrus.png"
                alt="Logo"
                style={{ width: "180px" }}
              />
            </div>
            <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            onClick={() => setShowNav(!showNav)}
          />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
              show={showNav}
            >
              <Offcanvas.Header  closeButton onHide={closeNav}></Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center  flex-grow-1 pe-3">
                  <Nav.Link onClick={closeNav}>
                    <Link
                      to="/"
                      className="px-4 text-decoration-none  text-dark"
                    >
                      <span className="navbar-hover  ">Home</span>
                    </Link>
                  </Nav.Link>

                  <NavDropdown onClick={closeNav}
                    title={
                      <Link
                        to="/about"
                        className="text-decoration-none text-dark"
                      >
                        <span className="navbar-hover">About</span>
                       
                     
                      </Link>
                    }
                    className="px-4  "
                 
                  >
                    <NavDropdown.Item className="drop-down" onClick={closeNav} >
                      {" "}
                      <Link
                        to="/our-mission"
                        className="  text-decoration-none text-dark"
                      >
                       <span className="drop-down "> Our Mission </span>
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="drop-down"  onClick={closeNav}>
                      {" "}
                      <Link
                        to="/our-vision"
                        className=" text-decoration-none text-dark"
                      >
                       <span className=" drop-down"> Our Vision </span>
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="drop-down" onClick={closeNav} >
                      {" "}
                      <Link
                        to="/our-philosophy"
                        className="drop-drown text-decoration-none text-dark"
                      >
                     <span className="drop-down">      Our Philosophy   </span>   
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="drop-down" onClick={closeNav} >
                      {" "}
                      <Link
                        to="/our-strategy"
                        className=" drop-drown text-decoration-none text-dark"
                      >
                      <span className="drop-down">  Our Strategy </span>
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                  onClick={closeNav}
                    title={
                      <Link
                        to="/services"
                        className="text-decoration-none text-dark"
                      >
                        <span className="navbar-hover">Services</span>
                      </Link>
                    }
                    className="px-4  "
                  >
                  <NavDropdown.Item className="drop-down" onClick={closeNav} >
                      <Link
                        to="/software-consulting"
                        className=" drop-drown text-decoration-none text-dark"
                      >
                        <span className="drop-down">Software Consulting and Integration </span>
                        
                        
                        {" "}
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="drop-down"onClick={closeNav}  >
                      {" "}
                      <Link
                        to="/software-development"
                        className="drop-drown text-decoration-none text-dark"
                      >
                        <span className="drop-down">Software Development</span>
                        
                        {" "}
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="drop-down" onClick={closeNav}  >
                      {" "}
                      <Link
                        to="/enterprise-application"
                        className="drop-drown text-decoration-none text-dark"
                      >
                      <span className="drop-down"> Enterprise Application</span> 
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="drop-down" onClick={closeNav} >
                      <Link
                        to="/technology-development"
                        className="drop-drown text-decoration-none text-dark"
                      >
                    <span className="drop-down"> Technology Development </span>   
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>

                  <Nav.Link onClick={closeNav}>
                    <Link
                      to="/career"
                      className="px-4 text-decoration-none text-dark"
                    >
                      <span className="navbar-hover">Career</span>
                    </Link>
                  </Nav.Link>

                  <Nav.Link onClick={closeNav}>
                    <Link
                      to="/contact"
                      className="px-4 text-decoration-none text-dark"
                    >
                      <span className="navbar-hover">Contact</span>
                    </Link>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <div className="info-div">
              <div className="d-flex align-items-center justify-content-between">
                <i className="fa fa-phone fs-1 mx-4 px-4 border-end"></i>
                <span>
                  <div className="me-5">
                    <p className="my-0">Have Any Questions?</p>
                    <p className="my-0 fw-bold">+1-954-850-8839</p>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
