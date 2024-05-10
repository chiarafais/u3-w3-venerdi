import { Col, Row, Image, NavLink } from "react-bootstrap";

const MyFooter = () => {
  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col lg={10} className=" offset-lg-2">
          <Row className=" h-100 flex-column justify-content-center align-items-center">
            <Col xs={6} md={4} className="playerControls">
              <div className="d-flex align-items-center">
                <NavLink>
                  <Image src={"src/assets/playerbuttons/shuffle.png"} alt="shuffle" />
                </NavLink>
                <NavLink>
                  <Image src={"src/assets/playerbuttons/prev.png"} alt="prev" />
                </NavLink>
                <NavLink>
                  <Image src={"src/assets/playerbuttons/play.png"} alt="play" />
                </NavLink>
                <NavLink>
                  <Image src={"src/assets/playerbuttons/next.png"} alt="next" />
                </NavLink>
                <NavLink>
                  <Image src={"src/assets/playerbuttons/repeat.png"} alt="repeat" />
                </NavLink>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default MyFooter;
