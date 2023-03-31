import React from 'react';
import PropTypes from 'prop-types';
import MinesTile from "./MinesTile";
import {Field} from "../../model/mines.model";


const MinesField = ({field, onOpen, onMark}) => {
  return (
    <div className="minefield" style={{gridTemplateColumns: "0fr ".repeat(field.columnCount)}}>
      {
        field.tiles.map((row, ri) => row.map((tile, ci) => (
          <MinesTile key={`tile-${ri}-${ci}`}
                     tile={tile}
                     onOpen={() => onOpen(ri, ci)}
                     onMark={() => onMark(ri, ci)}/>
        )))
      }
    </div>
  );
}

MinesField.propTypes = {
  "field": PropTypes.instanceOf(Field),
  "onOpen": PropTypes.func,
  "onMark": PropTypes.func
};

MinesField.defaultProps = {
  "field": new Field(4, 4, 1),
  "onOpen": () => {},
  "onMark": () => {}
};

export default MinesField;
