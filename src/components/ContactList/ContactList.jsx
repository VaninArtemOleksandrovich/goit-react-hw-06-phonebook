import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { deleteContactsAction } from '../../redux/contacts/slice.contacts';
import { getFilteredContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
 

  console.log('contacts', contacts);

  const dispatch = useDispatch();

  const handleDeleteContact = e => {
    dispatch(deleteContactsAction(e.target.dataset.id));
  };

  return (
    <ul>
      {contacts?.map(({ id, name, number }) => {
        return (
          <li className={css.item} key={id}>
            <p>{`${name}: ${number}`}</p>
            <button
              className={css.btn}
              onClick={handleDeleteContact}
              type="button"
              data-id={id}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
