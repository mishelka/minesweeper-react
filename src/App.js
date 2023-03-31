import './App.css';
import {useState} from "react";
import Scores from "./components/Scores/Scores";
import Comments from "./components/Comments/Comments";
import Minesweeper from "./components/Minesweeper/Minesweeper";
import Kamene from "./components/Kamene/Kamene";

function App() {
  const [selectedGame, setSelectedGame] = useState("mines");
  const [displayedService, setDisplayedService] = useState(0)

  return (
    <div className="App">
      <h1 className="text-4xl mb-2 text-gray-800">Welcome to GameStudio!</h1>
      <h2 className="text-lg text-gray-800 mb-8">May the force be with you!</h2>

      Please select your game here:
      <ul className="list-disc ml-8">
        <li><button className={"button-link"} onClick={() => setSelectedGame("mines")}>Mines</button></li>
        <li><button className={"button-link"} onClick={() => setSelectedGame("tiles")}>Tiles</button></li>
      </ul>

      {selectedGame === 'mines' && <Minesweeper/>}
      {selectedGame === 'tiles' && <Kamene/>}

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
