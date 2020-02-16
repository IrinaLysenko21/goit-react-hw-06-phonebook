import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import shortid from 'shortid';
import Message from '../Message/Message';
import styles from './ContactForm.module.css';
import popTransition from '../../transitions/pop.module.css';

class ContactForm extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
      }).isRequired,
    ).isRequired,
    addContact: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
    messageText: '',
    messageIsShowing: false,
  };

  inputIds = {
    nameId: shortid.generate(),
    numberId: shortid.generate(),
  };

  componentDidMount() {
    try {
      const { addContact } = this.props;
      const persistedContacts = localStorage.getItem('contacts');
      if (persistedContacts) {
        const contacts = JSON.parse(persistedContacts);
        contacts.map(el => addContact(el));
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    try {
      const { contacts } = this.props;
      if (prevState.contacts !== contacts) {
        localStorage.setItem('contacts', JSON.stringify(contacts));
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  findMatchingContact = (contacts, name) =>
    contacts.find(contact => contact.name === name);

  createContact = (name, number) => ({
    id: shortid.generate(),
    name,
    number,
  });

  showMessage = text => {
    this.setState(
      prevState => ({
        messageIsShowing: !prevState.messageIsShowing,
        messageText: text,
      }),
      () =>
        setTimeout(() => {
          this.setState(prevState => ({
            messageIsShowing: !prevState.messageIsShowing,
            messageText: '',
          }));
        }, 2000),
    );
  };

  // eslint-disable-next-line consistent-return
  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const { contacts, addContact } = this.props;

    if (name.trim() === '' || number.trim() === '')
      return this.showMessage('Please fill out the form');

    // eslint-disable-next-line no-restricted-globals
    if (isNaN(+number)) return this.showMessage('Wrong number format');

    const matchingContact = this.findMatchingContact(contacts, name);

    if (matchingContact) return this.showMessage('Contact already exists');

    addContact(this.createContact(name, number));

    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number, messageText, messageIsShowing } = this.state;
    const { nameId, numberId } = this.inputIds;

    return (
      <>
        <form className={styles.contactForm} onSubmit={this.handleSubmit}>
          <label htmlFor={nameId} className={styles.label}>
            <span className={styles.inputName}>Enter name:</span>
            <input
              id={nameId}
              className={styles.input}
              type="text"
              name="name"
              placeholder="Enter name..."
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor={numberId} className={styles.label}>
            <span className={styles.inputName}>Enter number:</span>
            <input
              id={numberId}
              className={styles.input}
              type="text"
              name="number"
              placeholder="Enter phone number..."
              value={number}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" className={styles.submitBtn}>
            Save contact
          </button>
        </form>
        <CSSTransition
          in={messageIsShowing}
          timeout={250}
          classNames={popTransition}
          unmountOnExit
        >
          <Message text={messageText} />
        </CSSTransition>
      </>
    );
  }
}

export default ContactForm;
