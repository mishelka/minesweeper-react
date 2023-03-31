import './App.css';
import {useState} from "react";
import Scores from "./components/Scores/Scores";
import Comments from "./components/Comments/Comments";
import Minesweeper from "./components/Minesweeper/Minesweeper";

function App() {
  const [selectedGame, setSelectedGame] = useState("mines");
  const [displayedService, setDisplayedService] = useState(0)

  return (
    <div className="App">
      <h1 className="text-4xl mb-2 text-gray-800">Welcome to GameStudio!</h1>
      <h2 className="text-lg text-gray-800 mb-8">May the force be with you!</h2>

      {selectedGame === 'mines' && <Minesweeper/>}
      {/*{selectedGame === 'tiles' && <Tiles/>}*/}

      {/*<button onClick={() => setSelectedGame("mines")}>Mines</button>*/}
      {/*<button onClick={() => setSelectedGame("tiles")}>Tiles</button>*/}

      <div className="flex flex-row mt-10 w-full">
        <button className={`${displayedService === 0 ? 'button-primary' : 'button-secondary'} button-tab mr-2`}
                onClick={() => setDisplayedService(0)}>Top Scores</button>
        <button className={`${displayedService === 1 ? 'button-primary' : 'button-secondary'} button-tab`}
                onClick={() => setDisplayedService(1)}>Comments</button>
      </div>
      <hr className="mb-4"/>

      {displayedService === 0 && <Scores game={selectedGame}/>}
      {displayedService === 1 && <Comments game={selectedGame}/>}
    </div>
  );
}

export default App;
