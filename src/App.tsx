/* eslint-disable no-empty-pattern */
import { useContext, useEffect } from 'react';
import './App.css';
import Login from './Components/Login/Login';
import { getTokenFromUrl } from './utils/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Components/Player/Player';
import { DataLayerContext } from './Contexts/DataLayer'


const s = new SpotifyWebApi()

function App() {

  const [{ token }, dispatch] = useContext(DataLayerContext)

  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = '';
   const _token = hash.access_token
   if (_token) {
     dispatch({
       type: 'SET_TOKEN',
       token: _token
     })
     s.setAccessToken(_token);

     s.getMe().then(user => {

       dispatch({
         type: 'SET_USER',
         user: user
       })
     })

     s.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: s,
      });

     s.getUserPlaylists().then((playlists) => {
       dispatch({
         type: 'SET_PLAYLISTS',
         playlists: playlists
       })
     })

     s.getPlaylist('37i9dQZEVXcTRejkLURucT').then((response) => {
      dispatch({
        type: 'SET_DISCOVER_WEEKLY',
        discover_weekly: response
      })
    })
   }
  }, [token, dispatch])

  return (
    <div className="app">
      {
        token ? (<Player spotify={s} /> ):   <Login />
      }
   
     {/** */}
    </div>
  );
}

export default App;
