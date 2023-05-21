export const selectContacts = state => state.contacts.contacts.items;
export const selectIsLoading = state => state.contacts.contacts.isLoading;
export const selectError = state => state.contacts.contacts.error;

export const selectFilter = state => state.filter.filter;

export const selectVisibleContacts = state => {
    const contacts = selectContacts(state);
    const filter = selectFilter(state);
    return contacts.filter(contact =>  contact.name.toLocaleLowerCase().includes(filter));
};