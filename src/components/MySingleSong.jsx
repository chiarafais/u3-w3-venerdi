import { Col, Image } from "react-bootstrap";
import { addToFavouriteAction, playSong, removeToFavouriteAction } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const MySingleSong = (song) => {
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.song.content);
  console.log(favorites);
  const isFav = favorites.includes(song.song.id);

  return (
    <>
      <Col xs={3} className="text-center">
        <Image
          className="img-fluid"
          src={song.song.album.cover_medium}
          alt="track"
          onClick={() => dispatch(playSong(song.song))}
        />

        {isFav ? (
          <div>
            <i className="bi bi-heart-fill" onClick={() => dispatch(removeToFavouriteAction(song.song.id))}></i>
          </div>
        ) : (
          <div>
            <i className="bi bi-heart" onClick={() => dispatch(addToFavouriteAction(song.song.id))}></i>
          </div>
        )}

        <p className="m-0"> {song.song.title} </p>
        <p>Artist: {song.song.artist.name}</p>
      </Col>
    </>
  );
};
export default MySingleSong;
