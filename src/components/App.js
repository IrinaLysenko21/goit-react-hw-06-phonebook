import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import ContactList from './ContactList/ContactListContainer';
import Filter from './Filter/FilterContainer';
import ContactForm from './ContactForm/ContactFormContainer';
import * as phonebookSelectors from '../redux/phonebook/phonebookSelectors';
import styles from './App.module.css';
import popTransition from '../transitions/pop.module.css';
import slideTransition from '../transitions/slide.module.css';
import appearTransition from '../transitions/appear.module.css';

const App = ({ contactsLength }) => {
  return (
    <div className={styles.wrapper}>
      <CSSTransition in timeout={500} classNames={appearTransition} appear>
        <h1 className={styles.heading}>Phonebook</h1>
      </CSSTransition>

      <ContactForm />

      <h2 className={styles.heading}>Contacts</h2>

      <CSSTransition
        in={contactsLength > 1}
        timeout={250}
        classNames={popTransition}
        unmountOnExit
      >
        <Filter />
      </CSSTransition>
      <CSSTransition
        in={contactsLength > 0}
        timeout={250}
        classNames={slideTransition}
        unmountOnExit
      >
        <ContactList />
      </CSSTransition>
    </div>
  );
};

App.propTypes = {
  contactsLength: PropTypes.number.isRequired,
};

const mapStateToProps = store => ({
  contactsLength: phonebookSelectors.getContactsLength(store),
});

export default connect(mapStateToProps)(App);
