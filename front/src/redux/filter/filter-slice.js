import { createSlice } from "@reduxjs/toolkit";
import {filterContacts} from "./filter-action"
const contactsSlice = createSlice({
    name: 'filter/set',
    initialState: '',
    extraReducers: {
        [filterContacts]: (_, {payload}) =>  payload,
    }
})
export default contactsSlice.reducer;