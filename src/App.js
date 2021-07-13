import logo from './logo.svg';
import './App.css';
import Playlist from './component.js';
import data from './data.js'
function App() {
  return (
      <div className="App">
          <div class="playlist-container">
              <Playlist/>
          </div>
    </div>
  );
}

export default App;

