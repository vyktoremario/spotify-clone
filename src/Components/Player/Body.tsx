import React, { useContext } from "react";
import "./Body.css";
import Header from "./Header";
import SongRow from "./SongRow";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { DataLayerContext } from "../../Contexts/DataLayer";

function Body({ spotify }: any ) {
  const [{ discover_weekly }, dispatch] = useContext(DataLayerContext);

  const playPlaylist = (id: any) => {
    spotify
      .play({
        context_uri: `spotify:playlist:6g8Lz3t9XToezSPTMBDgkV`,
      })
      .then((res: any) => {
        spotify.getMyCurrentPlayingTrack().then((r: { item: any; }) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id: string) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res: any) => {
        spotify.getMyCurrentPlayingTrack().then((r: { item: any; }) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon
            className="body__shuffle"
            onClick={playPlaylist}
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {discover_weekly?.tracks.items.map((item: { track: any; }) => (
          <SongRow playSong={playSong} track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;