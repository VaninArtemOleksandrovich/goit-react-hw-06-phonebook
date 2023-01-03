import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import css from './App.module.css';
import { useSelector } from 'react-redux';

export const App = () => {
  const state = useSelector(state => state);
  console.log('state', state);

  return (
    <div className={css.section}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
