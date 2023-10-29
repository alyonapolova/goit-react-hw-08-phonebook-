import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts;
export const selectStatusFilter = state => state.contacts.filter;
export const selectIsLoading = state => state.contacts.isLoading;

export const selectorFilteredContacts = createSelector(
  selectContacts,
  selectStatusFilter,
  (contacts, filter) =>
    contacts
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts
);
