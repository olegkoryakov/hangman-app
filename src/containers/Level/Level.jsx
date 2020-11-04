import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './level.scss';

const Level = ({ level }) => (
  <div className="level">
    <h1 className="level__title">
      Уровень:
      {' '}
      {level}
    </h1>
  </div>
);

Level.propTypes = {
  level: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  level: state.word.currentIndex + 1,
});

export default connect(mapStateToProps)(Level);
