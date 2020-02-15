import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import ContactList from './ContactList/ContactListContainer';
import Filter from './Filter/FilterContainer';
import ContactForm from './ContactForm/ContactFormContainer';
import * as phonebookSelectors from '../redux/phonebook/phonebookSelectors';
// import * as localStorage from '../services/localStorage';
import styles from './App.module.css';
import popTransition from '../transitions/pop.module.css';
import slideTransition from '../transitions/slide.module.css';
import appearTransition from '../transitions/appear.module.css';

const App = ({ contacts }) => {
  // componentDidMount() {
  //   const contacts = localStorage.getContacts();

  //   if (contacts) {
  //     this.setState({ contacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   const { contacts } = this.state;

  //   if (prevState.contacts !== contacts) {
  //     localStorage.saveContacts(contacts);
  //   }
  // }

  // const contacts = this.props;

  return (
    <div className={styles.wrapper}>
      <CSSTransition in timeout={500} classNames={appearTransition} appear>
        <h1 className={styles.heading}>Phonebook</h1>
      </CSSTransition>

      <ContactForm />

      <h2 className={styles.heading}>Contacts</h2>

      <CSSTransition
        in={contacts.length > 1}
        timeout={250}
        classNames={popTransition}
        unmountOnExit
      >
        <Filter />
      </CSSTransition>
      <CSSTransition
        in={contacts.length > 0}
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
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

const mapStateToProps = store => ({
  contacts: phonebookSelectors.getContacts(store),
});

export default connect(mapStateToProps)(App);
