import React from 'react';
import './Player.css'
import SideBar from './SideBar';
import Footer from './Footer';
import Body from './Body';

const Player = ({spotify}: any) => {
    return (
        <div className='player'>
            <div className="player__body">
                <SideBar />
                <Body spotify={spotify} />

            </div>
            <Footer spotify={spotify} />
        </div>
    )
}

export default Player