import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {getScore} from "../../service/score.service";
import Comments from "../Comments/Comments";

const Scores = ({ game }) => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    getScore(game).then(data => {
      setScores(data);
    });
  }, []);

  //JSX
  return (
    <div>
      <h2 className="subheader">Scores</h2>

      <div className="tab-container w-full">
        <div className="w-full">
          <table className="table-fixed w-full">
            <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
              <th>Date</th>
            </tr>
            </thead>
            <tbody>
              {
                scores.map(s => (
                  <tr key={s.id}>
                    <td>{s.player}</td>
                    <td>{s.points}</td>
                    <td>{new Date(s.playedOn).toLocaleString()}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

Scores.propTypes = {
  "game": PropTypes.string
};

Scores.defaultProps = {
  "game": "mines"
};

export default Scores;