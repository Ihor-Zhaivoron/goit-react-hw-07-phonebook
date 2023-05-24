import { PhoneBook } from './PhoneBook/PhoneBook';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <>
      <PhoneBook />
      <Contacts>
        <Filter />
      </Contacts>
    </>
  );
};
