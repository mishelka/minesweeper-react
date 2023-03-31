import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {getComments} from "../../service/comment.service";


const Comments = ({ game }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(game).then(data => {
      setComments(data);
    });
  }, []);

  //JSX
  return (
    <div>
      <h2 className="subheader">Comments</h2>

      <div className="tab-container w-full">
        <div className="w-full">
          <table className="table-fixed w-full">
            <thead>
            <tr>
              <th>Name</th>
              <th>Comment</th>
              <th>Date</th>
            </tr>
            </thead>
            <tbody>
            {
              comments.map(c => (
                <tr key={c.id}>
                  <td>{c.player}</td>
                  <td>{c.comment}</td>
                  <td>{new Date(c.commentedOn).toLocaleString()}</td>
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

Comments.propTypes = {
  "game": PropTypes.string
};

Comments.defaultProps = {
  "game": "mines"
};

export default Comments;