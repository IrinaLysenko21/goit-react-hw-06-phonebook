import { connect } from 'react-redux';
import * as phonebookActions from '../../redux/phonebook/phonebookActions';
import * as phonebookSelectors from '../../redux/phonebook/phonebookSelectors';
import ContactForm from './ContactForm';

const mapStateToProps = store => ({
  contacts: phonebookSelectors.getContacts(store),
});

const mapDispatchToProps = dispatch => ({
  addContact: contact => dispatch(phonebookActions.addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
