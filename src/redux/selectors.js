export const getFilter = state => state.filter.filter;

export const getFilteredContacts = state =>
  state.contacts.items?.filter(contact =>
    contact.name.toLowerCase()?.includes(state.filter.filter.toLowerCase())
  );
