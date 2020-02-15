import { connect } from 'react-redux';
import * as phonebookActions from '../../redux/phonebook/phonebookActions';
import * as phonebookSelectors from '../../redux/phonebook/phonebookSelectors';
import Filter from './Filter';

const mapStateToProps = store => ({
  value: phonebookSelectors.getFilterValue(store),
});

const mapDispatchToProps = dispatch => ({
  changeFilter: value => dispatch(phonebookActions.changeFilter({ value })),
  // Without Redux Toolkit
  // changeFilter: value => dispatch(phonebookActions.changeFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
