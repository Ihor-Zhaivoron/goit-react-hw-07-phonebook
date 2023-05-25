import { useSelector, useDispatch } from 'react-redux';
// import { removeContact } from 'redux/slicerApi';
import { getContacts, getFilter } from 'redux/selectors';
import { useEffect, useState } from 'react';
import { fetchAllContacts, deleteContact } from 'redux/operation';

import { Blocks, LineWave } from 'react-loader-spinner';

// import PropTypes from 'prop-types';
import css from './ContactsEl.module.css';

export const ContactsEl = () => {
  const dispatch = useDispatch();
  const [targetId, setTargetId] = useState(null);

  const { items: contacts, isLoading } = useSelector(getContacts);
  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  let filteredContacts = [];
  if (contacts.length) {
    filteredContacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  }

  const handleDeleteContact = id => {
    setTargetId(id);
    dispatch(deleteContact(id));
  };

  return (
    <>
      {filteredContacts.length > 0 &&
        filteredContacts.map(contact => (
          <li key={contact.id} className={css.item}>
            <span className={css.name}>{contact.name}: </span>
            {contact.phone}
            <button
              type="button"
              disabled={isLoading && contact.id === targetId}
              onClick={() => handleDeleteContact(contact.id)}
            >
              {isLoading && contact.id === targetId ? (
                <LineWave
                  width="38"
                  color="#000"
                  arialabel="line-wave"
                  visible={true}
                />
              ) : (
                'Delete'
              )}
            </button>
          </li>
        ))}
      <Blocks
        visible={isLoading}
        height="60"
        width="60"
        wrapperClass="spinner"
      />
    </>
  );
};

// ContactsEl.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       phone: PropTypes.string.isRequired,
//     })
//   ),
// };
