import './App.css';
import {useState} from "react";
import Scores from "./components/Scores/Scores";
import Comments from "./components/Comments/Comments";
import Minesweeper from "./components/Minesweeper/Minesweeper";

function App() {
  const [selectedGame, setSelectedGame] = useState("mines");

  return (
    <div className="App">
      <h1 className="text-4xl mb-2 text-gray-800">Welcome to GameStudio!</h1>
      <h2 className="text-lg text-gray-800 mb-8">May the force be with you!</h2>

      {selectedGame === 'mines' && <Minesweeper/>}
      {/*{selectedGame === 'tiles' && <Tiles/>}*/}

      {/*<button onClick={() => setSelectedGame("mines")}>Mines</button>*/}
      {/*<button onClick={() => setSelectedGame("tiles")}>Tiles</button>*/}

      <Scores game={selectedGame}/>
      <Comments game={selectedGame}/>
    </div>
  );
}

export default App;
