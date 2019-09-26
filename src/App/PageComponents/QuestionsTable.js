import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';

const QuestionsTable = ({ questions }) => {
  return (
    <Fragment>
      <Table striped>
        <thead>
          <tr>
            <th>Question</th>
            <th style={{whiteSpace: 'nowrap'}}>Average Rating</th>
          </tr>
        </thead>
        <tbody>
        {
          questions.map(( question, index ) => {
            return (
              <tr key={index}>
                <td>{question.description}</td>
                <td
                  style={{textAlign: 'center'}}
                >{question.averageRating.toFixed(2)}</td>
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
