import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addContactsAction } from '../../redux/contacts/slice.contacts';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const contacts = useSelector(state => state.items);

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleAddContact = (name, number) => {
    return contacts?.find(contact => contact.name === name)
      ? alert(`${name} is already in contacts`)
      : dispatch(
          addContactsAction({
            id: nanoid(),
            name,
            number,
          })
        );
  };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default: {
        return;
      }
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleAddContact(name, number);
    onDelete();
  };

  const onDelete = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label title="Name" htmlFor="name" className={css.label}>
        Name
      </label>
      <input
        className={css.full}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleChange}
        value={name}
        required
      />
      <label htmlFor="number" className={css.label}>
        Number
      </label>{' '}
      <input
        className={css.full}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        onChange={handleChange}
        value={number}
        required
      />
      <button className={css.add} type="submit">
        Add contact
      </button>
    </form>
  );
};
