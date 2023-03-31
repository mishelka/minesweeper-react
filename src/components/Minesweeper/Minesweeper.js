import React, {useState} from 'react';
import MinesField from "./MinesField";
import {Field, GameState} from "../../model/mines.model";
import Modal from "../Modal/Modal";

const Minesweeper = () => {
  const [rows, setRows] = useState(4);
  const [cols, setCols] = useState(4);
  const [mines, setMines] = useState(1);
  const [field, setField] = useState(new Field(rows, cols, mines));
  const [modalDisplayed, setModalDisplayed] = useState(false);

  const updateFieldState = () => {
    const clone = new Field(+rows, +cols, +mines);
    clone.clone(field);
    setField(clone);
  }

  const handleNewGame = (e) => {
    e && e.preventDefault();
    setField(new Field(+rows, +cols, +mines));
  }

  const handleOpen = (row, col) => {
    field.openTile(row, col);
    updateFieldState();
    if(field.state !== GameState.PLAYING) setModalDisplayed(true);
  }

  const handleMark = (row, col) => {
    field.markTile(row, col);
    updateFieldState();
  }

  const handleRowsChange = (e) => setRows(e.target.value);
  const handleColsChange = (e) => setCols(e.target.value);
  const handleMinesChange = (e) => setMines(e.target.value)

  return (
    <div>
      { modalDisplayed &&
        <Modal state={field.state}
               onNewGame={() => { handleNewGame(); setModalDisplayed(false); }}
               onClose={() => setModalDisplayed(false)}/>
      }

      <h2 className="subheader">Minesweeper</h2>

      <form name="newGameForm" className="mb-6">
        <div className="grid grid-cols-4 gap-4">
          <input className="input-field-inline" min="0" max="100"
                 placeholder="Number of rows"
                 type="number" name="rows"
                 defaultValue={rows}
                 onChange={handleRowsChange}
          />
          <input className="input-field-inline"
                 placeholder="Number of columns"
                 type="number" name="cols"
                 defaultValue={cols}
                 onChange={handleColsChange}
          />
          <input className="input-field-inline"
                 placeholder="Number of mines"
                 type="number" name="mines"
                 defaultValue={mines}
                 onChange={handleMinesChange}
          />
          <button className="button-primary"
                  onClick={handleNewGame}>
            New Game
          </button>
        </div>
      </form>

      <MinesField field={field}
                  onOpen={handleOpen}
                  onMark={handleMark}/>
    </div>
  );
}

export default Minesweeper;
