import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import colourCodesForRating from '../../Utils/colourCodesForRating';
import './questionsTable.scss';

const QuestionsTable = ({ questions }) => {
  return (
    <Fragment>
      <Table striped className="questions-table">
        <thead>
          <tr>
            <th>Question</th>
            <th className="average-rating-header">Average Rating</th>
          </tr>
        </thead>
        <tbody>
        {
          questions.map(( question, index ) => {
            const averageRating = question.averageRating.toFixed(2);
            const ratingColourCode = colourCodesForRating(averageRating);
            return (
              <tr key={index}>
                <td>{question.description}</td>
                <td className={`average-rating-value text-${ratingColourCode}`}>
                  {averageRating}
                </td>
              </tr>
            )
          })
        }
        </tbody>
      </Table>
    </Fragment>
  );
}

QuestionsTable.propTypes = {
  questions: PropTypes.array
}

export default QuestionsTable;
