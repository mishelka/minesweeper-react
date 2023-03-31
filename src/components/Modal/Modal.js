import PropTypes from 'prop-types';
import {GameState} from "../../model/mines.model";

const Modal = ({ state, onNewGame, onClose }) => {
  return (
    <div id="winLoseModal"
         className="default-modal">
      <div className="modal-container">
        <div className="modal">
          <div className="modal-header">
            <h3 className="header-title" id="modalHeader">
              { state === GameState.SOLVED && 'YOU WON!' }
              { state === GameState.FAILED && 'YOU FAILED!' }
            </h3>
            <button id="modalCloseButton"
                    type="button"
                    className="close-button"
                    data-modal-hide="winLoseModal"
                    onClick={onClose}>
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path></svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="modal-content" id="modalContent">
            { state === GameState.SOLVED && 'You won the game, congratulations!' }
            { state === GameState.FAILED && 'Pity, you failed!' }

            <p>What do you want to do now?</p>
          </div>
          <div className="modal-actions">
            <button id="modalNewGameButton"
                    data-modal-hide="winLoseModal"
                    type="button"
                    className="button-primary"
                    onClick={onNewGame}>New Game</button>
            <button id="modalExitButton"
                    data-modal-hide="winLoseModal"
                    type="button"
                    className="button-secondary"
                    onClick={onClose}>Exit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  "state": PropTypes.string,
  "onNewGame": PropTypes.func,
  "onClose": PropTypes.func
};

Modal.defaultProps = {
  "state": GameState.PLAYING,
  "onNewGame": () => {},
  "onClose": () => {}
};

export default Modal;
