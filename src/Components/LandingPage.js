import { Container, Row, Col } from "react-bootstrap";
import "../style/landingpage.css";

const LandingPage = () => {
  return (
    <>
      <div id="landingpage" className="landingpage ">
        <div className="gradient_top  "></div>
        <Container>
          <Row className="d-flex align-items-center intro ">
            <Col className="text-item">
              <div className="hero-title">Tempat Menonton </div>
              <div className="hero-title">Film Terbaru dan Termudah </div>
              <button className="btn btn-success">Get Started</button>
            </Col>
          </Row>
        </Container>
        <div className="gradient_bottom "></div>
      </div>
    </>
  );
};

export default LandingPage;
