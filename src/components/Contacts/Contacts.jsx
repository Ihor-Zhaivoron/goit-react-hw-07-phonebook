import { ContactsEl } from '../ContactsEl/ContactsEl';

import css from './Contacts.module.css';

export const Contacts = ({ children }) => {
  return (
    <div className="container">
      <h2>Contacts</h2>
      <p>Find contact by name</p>
      {children}
      <ul className={css.list}>
        <ContactsEl />
      </ul>
    </div>
  );
};
