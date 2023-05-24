import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'redux/slicerApi';
import { getContacts, getFilter } from 'redux/selectors';

import PropTypes from 'prop-types';
import css from './ContactsEl.module.css';

export const ContactsEl = () => {
  const dispatch = useDispatch();

  const { contacts } = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteContact = id => {
    dispatch(removeContact(id));
  };

  return (
    <>
      {filteredContacts.map(contact => (
        <li key={contact.id} className={css.item}>
          <span className={css.name}>{contact.name}: </span>
          {contact.number}
          <button type="button" onClick={() => deleteContact(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </>
  );
};

ContactsEl.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
