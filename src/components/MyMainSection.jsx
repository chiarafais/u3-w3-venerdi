import { Col, NavLink, Row } from "react-bootstrap";

const MyMainSection = () => {
  return (
    <div className="col-12 col-md-9 offset-md-3 mainPage">
      <Row>
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <NavLink>TRENDING</NavLink>
          <NavLink>PODCAST</NavLink>
          <NavLink>MOODS AND GENRES</NavLink>
          <NavLink>NEW RELEASES</NavLink>
          <NavLink>DISCOVER</NavLink>
        </div>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="rock">
            <h2>Rock Classics</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="rockSection"
            ></div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="pop">
            <h2>Pop Culture</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="popSection"
            ></div>
          </div>
        </Col>
      </Row>
      <Row className="row">
        <Col xs={10}>
          <div id="hiphop">
            <h2>#HipHop</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="hipHopSection"
            ></div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default MyMainSection;
