import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ value, changeFilter }) => {
  return (
    <input
      className={styles.search}
      type="text"
      value={value}
      onChange={e => changeFilter(e.target.value)}
      placeholder="Find contact..."
    />
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default Filter;
