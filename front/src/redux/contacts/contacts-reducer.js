// import { createReducer } from "@reduxjs/toolkit";
// import actions from "./contacts-actions";

// const initialStore = {
//     items: [],
//     loading: false,
//     error: null,
// }

// const contactsReducer = createReducer(initialStore, {
//     [actions.fetchContactsLoading]: (store) => {
//         store.loading = true;
//         store.error = null;
//     },
//     [actions.fetchContactsSuccsess]: (store, {payload}) => {
//         store.items = payload;
//         store.loading = false;
//     },
//     [actions.fetchContactsError]: (store, {payload}) => {
//         store.error = payload;
//         store.loading = false;
//     },

//     [actions.addContactsLoading]: (store) => {
//         store.loading = true;
//         store.error = null;
//     },
//     [actions.addContactsSuccsess]: (store, {payload}) => {
//         store.items.push(payload);
//         store.loading = false;
//     },
//     [actions.addContactsError]: (store, {payload}) => {
//         store.error = payload;
//         store.loading = false;
//     },

//     [actions.removeContactsLoading]: (store) => {
//         store.loading = true;
//         store.error = null;
//     },
//     [actions.removeContactsSuccsess]: (store, {payload}) => {
//         store.items = store.items.filter(({id}) => id !== payload);
//         store.loading = false;
//     },
//     [actions.removeContactsError]: (store, {payload}) => {
//         store.error = payload;
//         store.loading = false;
//     },

// })

// export default contactsReducer;
