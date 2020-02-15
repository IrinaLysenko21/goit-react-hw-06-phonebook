import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import * as localstorage from '../../services/localStorage';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';
import slideTransition from '../../transitions/slide.module.css';

class ContactList extends Component {
  componentDidMount() {
    const { contacts } = this.props;
    localstorage.saveContacts(contacts);
  }

  componentDidUpdate() {
    const { contacts } = this.props;
    localstorage.saveContacts(contacts);
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

// const ContactList = ({ contacts, deleteContact }) => (
//   <TransitionGroup component="ul" className={styles.contactList}>
//     {contacts.map(contact => (
//       <CSSTransition
//         key={contact.id}
//         timeout={250}
//         unmountOnExit
//         classNames={slideTransition}
//       >
//         <li>
//           <Contact
//             name={contact.name}
//             number={contact.number}
//             handleDeleteContact={() => deleteContact(contact.id)}
//           />
//         </li>
//       </CSSTransition>
//     ))}
//   </TransitionGroup>
// );

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }).isRequired,
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
