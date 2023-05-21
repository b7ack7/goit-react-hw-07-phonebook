import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const handlePending = state => {
    state.isLoading = true;
};
const handleRejected = (state, action) => {
    state.contacts.isLoading = false;
    state.contacts.error = action.payload;
};

const contactSlice = createSlice({
    name: "contacts",
    initialState: {
        contacts: {
            items: [],
            isLoading: false,
            error: null
        }
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchContacts.pending, handlePending)
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.contacts.isLoading = false;
            state.contacts.error = null;
            state.contacts.items = action.payload;
        })
        .addCase(fetchContacts.rejected, handleRejected)
        .addCase(addContact.pending, handlePending)
        .addCase(addContact.fulfilled, (state, action) => {
            state.contacts.isLoading = false;
            state.contacts.error = null;
            state.contacts.items.push(action.payload);
        })
        .addCase(addContact.rejected, handleRejected)
        .addCase(deleteContact.pending, handlePending)
        .addCase(deleteContact.fulfilled, (state, action) => {
            state.contacts.isLoading = false;
            state.contacts.error = null;
            state.contacts.items = state.contacts.items.filter(contact => contact.id !== action.payload.id);
        })
        .addCase(deleteContact.rejected, handleRejected)
      },
});

export const contactReducer = contactSlice.reducer;