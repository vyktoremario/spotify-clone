/* eslint-disable array-callback-return */
//https:developer.spotifycom/documentation/web-playback-sdk/quick-start

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectURI = "http://localhost:3001";

const clientId = "6fe82991520844319b8f7f72f415a2ff";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];


export const getTokenFromUrl = () => {
    return window.location.hash.substr(1).split('&').reduce((initial:Record<string, any>, item:string):Record<string, any> => {
        let parts: string[] = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1])
        return initial
    }, {})
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectURI}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
