import React, { useContext } from "react";
import "./SideBar.css";
import SideBarOption from "./SideBarOption";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import { DataLayerContext } from "../../Contexts/DataLayer";

const SideBar = () => {
    const [{ playlists } ] = useContext(DataLayerContext)
    console.log(playlists);
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />

      <SideBarOption Icon={HomeIcon} title='Home' />
      <SideBarOption Icon={SearchIcon} title='Search' />
      <SideBarOption Icon={LibraryMusicIcon} title='Your Library' />

<br />
      <strong className='sidebar__title'>PLAYLISTS</strong>
      <hr />

        {playlists?.item?.map((playlist: { name: string; }) => (
            <SideBarOption  title={playlist.name} />

        ))}

    </div>
  );
};

export default SideBar;
