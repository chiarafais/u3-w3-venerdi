import { useEffect } from "react";
import { Col, NavLink, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getHipHopSongsAction, getPopSongsAction, getSongsAction } from "../redux/actions";
import MySingleSong from "./MySingleSong";

const MyMainSection = () => {
  const dispatch = useDispatch();
  //devo entrare dentro l'array che mi restituisce
  const canzoni = useSelector((state) => state.song.results);
  const canzoniPop = useSelector((state) => state.song.pop);
  const canzoniHipHop = useSelector((state) => state.song.hiphop);

  useEffect(() => {
    dispatch(getSongsAction("queen"));
    dispatch(getPopSongsAction("KatyPerry"));
    dispatch(getHipHopSongsAction("Eminem"));
  }, []);

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
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
              {canzoni.length > 0 &&
                canzoni.slice(0, 4).map((canzone) => {
                  return <MySingleSong key={canzone.id} song={canzone} />;
                })}
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="pop">
            <h2>Pop Culture</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="popSection">
              {canzoniPop.length > 0 &&
                canzoniPop.slice(0, 4).map((canzone) => {
                  return <MySingleSong key={canzone.id} song={canzone} />;
                })}
            </div>
          </div>
        </Col>
      </Row>
      <Row className="row">
        <Col xs={10}>
          <div id="hiphop">
            <h2>#HipHop</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="hipHopSection">
              {canzoniHipHop.length > 0 &&
                canzoniHipHop.slice(0, 4).map((canzone) => {
                  return <MySingleSong key={canzone.id} song={canzone} />;
                })}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default MyMainSection;
