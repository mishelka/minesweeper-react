import React from 'react';
import PropTypes from 'prop-types';
import {Clue, Tile, TileState} from "../../model/mines.model";

const MinesTile = ({tile, onOpen, onMark}) => {
  const getTileClass = () => {
    if(tile.value === undefined && tile.state === TileState.OPEN) return "tile mine " + tile.state.toLowerCase();
    return "tile tile-" + tile.value + " " + tile.state.toLowerCase();
  };

  return (
    <div className={getTileClass()}
         onClick={() => {
           onOpen();
         }}
         onContextMenu={(e) => {
           e.preventDefault()
           onMark();
         }}
    >
      {(tile.value !== undefined && tile.value !== 0 && tile.state === TileState.OPEN) && tile.value}
    </div>
  );
}

MinesTile.propTypes = {
  "tile": PropTypes.instanceOf(Tile),
  "onOpen": PropTypes.func,
  "onMark": PropTypes.func
};

MinesTile.defaultProps = {
  "tile": new Clue(4),
  "onOpen": () => {},
  "onMark": () => {}
};

export default MinesTile;
