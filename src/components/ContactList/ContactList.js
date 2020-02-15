import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import Contact from '../Contact/Contact';
import * as localStorage from '../../services/localStorage';
import styles from './ContactList.module.css';
import slideTransition from '../../transitions/slide.module.css';

class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
      }).isRequired,
    ).isRequired,
    deleteContact: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { contacts } = this.props;
    localStorage.saveContacts(contacts);
  }

  componentDidUpdate() {
    const { contacts } = this.props;
    localStorage.saveContacts(contacts);
  }

  render() {
    const { contacts, deleteContact } = this.props;

    return (
      <TransitionGroup component="ul" className={styles.contactList}>
        {contacts.map(contact => (
          <CSSTransition
            key={contact.id}
            timeout={250}
            unmountOnExit
            classNames={slideTransition}
          >
            <li>
              <Contact
                name={contact.name}
                number={contact.number}
                handleDeleteContact={() => deleteContact(contact.id)}
              />
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    );
  }
}

export default ContactList;
