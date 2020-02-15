import React from 'react';
import PropTypes from 'prop-types';
import styles from './Message.module.css';

const Message = ({ text }) => {
  return (
    <div className={styles.container}>
      <p>{text}</p>
    </div>
  );
};

Message.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Message;
