import { connect } from 'react-redux';
import * as phonebookActions from '../../redux/phonebook/phonebookActions';
import * as phonebookSelectors from '../../redux/phonebook/phonebookSelectors';
import ContactList from './ContactList';

const mapStateToProps = store => ({
  contacts: phonebookSelectors.getFilteredContacts(store),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(phonebookActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
