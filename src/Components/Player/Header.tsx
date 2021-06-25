import React, { useContext } from 'react';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import { Avatar } from '@material-ui/core'
import { DataLayerContext } from '../../Contexts/DataLayer';

const Header = ({spotify}: any) => {
    const [{ user }] = useContext(DataLayerContext)
    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon />
                <input placeholder="Search for artist, songs or playlist" type="text"
                />
            </div>
            <div className="header__right">
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header