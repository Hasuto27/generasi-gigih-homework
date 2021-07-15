import React from 'react';
import ReachDOM from 'react-dom';


class Playlist extends React.Component {
    render() {
        return (
            <div class="playlist-item divstyle">
                <div class="playlist-item-left">
                    <img src={this.props.imgurl} alt="Alternate Text" width="100px" height="100px" />
                </div>

                <div class="playlist-item-right">
                    <h3>{this.props.title}</h3>
                    <p>{this.props.artist}</p>
                    <p>{this.props.album}</p>
                    <a class="button button-playlist" href={ this.props.songurl}>Select</a>
                </div>
            </div>
            );
    }
}

export default Playlist;