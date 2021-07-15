import logo from './logo.svg';
import './App.css';
import Playlist from './component/component.js';
import data from './data.js';
function App() {
  return (
      <div className="App">
          <div class="playlist-container">
              <Playlist
                  title={data.name}
                  artist={data.artists[0].name}
                  album={data.album.name}
                  imgurl={data.album.images[0].url}
                  songurl={data.album.artists[0].external_urls.spotify}
              />
          </div>
    </div>
  );
}

export default App;

