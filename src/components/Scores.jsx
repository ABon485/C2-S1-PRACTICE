import React from 'react';
import PropTypes from 'prop-types';

const Scores = ({ courseName, results }) => {
  return (
    <div className="scores">
      <h2 className="scores-title">{courseName}</h2>
      <table className="scores-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index}>
              <td>{result.firstName}</td>
              <td>{result.lastName}</td>
              <td>{result.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Scores;
