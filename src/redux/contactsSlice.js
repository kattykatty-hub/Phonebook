import { createSlice, createSelector } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { selectNameFilter } from './filtersSlice';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push({ id: nanoid(), ...action.payload });
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

export const selectContacts = state => state.contacts.items;

export const selectFilteredContacts = createSelector(
  (state) => state.contacts.items,
  selectNameFilter,
  (contacts, filter) => contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  )
);

