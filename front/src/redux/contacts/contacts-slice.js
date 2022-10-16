import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContacts, removeContacts } from "./contacts-operations";


const initialState = {
    items: [],
    loading: false,
    error: null,
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: {
        [fetchContacts.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [fetchContacts.fulfilled]: (store, {payload}) => {
            store.items = payload;
            store.loading = false;
        },
        [fetchContacts.rejected]: (store, {payload}) => {
            store.error = payload;
            store.loading = false;
        },

        [addContacts.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [addContacts.fulfilled]: (store, {payload}) => {
            store.items.push(payload);
            store.loading = false;
        },
        [addContacts.rejected]: (store, {payload}) => {
            store.error = payload;
            store.loading = false;
        },

        [removeContacts.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [removeContacts.fulfilled]: (store, {payload}) => {
            store.items = store.items.filter(({id}) => id !== payload);
            store.loading = false;
        },
        [removeContacts.rejected]: (store, {payload}) => {
            store.error = payload;
            store.loading = false;
        },
    }
});

export default contactsSlice.reducer;