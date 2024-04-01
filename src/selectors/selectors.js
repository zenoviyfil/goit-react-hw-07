import { createSelector } from "@reduxjs/toolkit";

export const selectIsLoading = state => state.contacts.isLoading;

export const selectIsError = state => state.contacts.error;

export const selectContacts = state => state.contacts.items;

export const selectNameFilter = state => state.filters.name;

export const selectVisibleContacts = createSelector([selectContacts, selectNameFilter], (contacts, filter) => {
    if (filter.length > 0) {
        return contacts.filter((contact) =>
          contact.name.toLowerCase().includes(filter.toLowerCase().trim())
        );
    } else {
        return contacts;
    }
})