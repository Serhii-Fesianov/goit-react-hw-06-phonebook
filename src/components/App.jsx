import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

import s from './App.module.css';

export const App = () => {
  return (
    <div>
      <h1 className={s.headText}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.headText}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
