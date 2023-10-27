import { Col, Container, Nav, NavbarBrand, Row } from "react-bootstrap";
import logo from "../asset/images/logo.png";
import "../style/navigationbar.css";
const Navigationbar = () => {
  return (
    <>
      <Nav
        id="navbars"
        className="navbars justify-content-center  fixed-top"
        activeKey="/home"
      >
        <Container className="nav_con">
          <Row>
            <Col>
              <NavbarBrand
                className="d-flex justify-content-start mt-1"
                id="navbrand"
              >
                <img src={logo} className="logo" />
              </NavbarBrand>
            </Col>
            <Col variant="6" className="d-flex justify-content-end">
              <Nav.Item>
                <Nav.Link
                  href="#landingpage"
                  id="nav-link"
                  className="link-home"
                >
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href="#trending"
                  id="nav-link"
                  className="link-trending"
                >
                  Trending
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#movie" eventKey="link-1" id="nav-link">
                  Movies
                </Nav.Link>
              </Nav.Item>
            </Col>
          </Row>
        </Container>
      </Nav>
    </>
  );
};

export default Navigationbar;
