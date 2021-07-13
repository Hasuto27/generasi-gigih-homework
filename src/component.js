import React from 'react';
import ReachDOM from 'react-dom';

class Playlist extends React.Component {
    render() {
        return (
            <div class="playlist-item divstyle">
                <div class="playlist-item-left">
                    <img src="https://i.scdn.co/image/ab67616d00004851e8b066f70c206551210d902b" alt="Alternate Text" width="100px" height="100px" />
                </div>

                <div class="playlist-item-right">
                    <h3>Bohemian Rhapsody (The Original Soundtrack)</h3>
                    <p>Queen</p>
                    <button class="button button-playlist">Select</button>
                </div>
            </div>
            );
    }
}

export default Playlist;