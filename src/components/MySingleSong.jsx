import { Col, Image } from "react-bootstrap";

const MySingleSong = (song) => {
  console.log(song);
  return (
    <>
      <Col xs={3} className="text-center">
        <Image className="img-fluid" src={song.song.album.cover_medium} alt="track" />
        <p className="m-0"> {song.song.title} </p>
        <p>Artist: {song.song.artist.name}</p>
      </Col>
    </>
  );
};
export default MySingleSong;
