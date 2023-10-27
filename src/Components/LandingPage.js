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
              <div className="hero-title">
                Judul terpopuler dari Indonesia dan <br />
                seluruh dunia. Semuanya ada di Movies
                <br /> mulai dari Rp54.000.
              </div>
              <input
                type="text"
                placeholder="Almaat email"
                className="email-input"
              />
              <button className="btn-landingpage btn-danger">Mulai </button>
            </Col>
          </Row>
        </Container>
        <div className="gradient_bottom "></div>
      </div>
    </>
  );
};

export default LandingPage;
