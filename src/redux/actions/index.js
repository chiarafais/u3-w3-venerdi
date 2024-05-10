export const GET_SONGS = "GET_SONGS";
export const GET_SONGS_POP = "GET_SONGS_POP";
export const GET_SONGS_HIPHOP = "GET_SONGS_HIPHOP";

export const getSongs = (artist) => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artist);
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: GET_SONGS, payload: data });
      } else {
        throw new Error("Errore nella fetch song");
      }
    } catch (err) {
      console.log("errror", err);
    }
  };
};
export const getPopSongs = (artist) => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artist);
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: GET_SONGS_POP, payload: data });
      } else {
        throw new Error("Errore nella fetch song");
      }
    } catch (err) {
      console.log("errror", err);
    }
  };
};
export const getHipHopSongs = (artist) => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artist);
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: GET_SONGS_HIPHOP, payload: data });
      } else {
        throw new Error("Errore nella fetch song");
      }
    } catch (err) {
      console.log("errror", err);
    }
  };
};
