import { Col, Row, Image, NavLink } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToFavouriteAction, removeToFavouriteAction } from "../redux/actions";

const MyFooter = () => {
  const dispatch = useDispatch();
  const playSong = useSelector((state) => state.song.song);
  const favorites = useSelector((state) => state.song.content);

  const isFav = favorites.includes(playSong.id);

  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col lg={12}>
          <Row className=" h-100  justify-content-center align-items-center">
            {playSong && playSong.album && (
              <Col xs={2} className="d-flex align-items-center">
                {isFav ? (
                  <i
                    className="bi bi-heart-fill text-light"
                    onClick={() => dispatch(removeToFavouriteAction(playSong.id))}
                  ></i>
                ) : (
                  <i className="bi bi-heart text-light" onClick={() => dispatch(addToFavouriteAction(playSong.id))}></i>
                )}

                <Image className="mx-2" src={playSong.album.cover_small}></Image>
                <small className="text-light">{playSong.title}</small>
              </Col>
            )}

            <Col xs={8} md={4} className="playerControls">
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
