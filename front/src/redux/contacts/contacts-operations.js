import * as api from "helper/api";
import { Notify } from "notiflix";
// import actions from "./contacts-actions";
import { createAsyncThunk } from "@reduxjs/toolkit";

const doubleСontacts = ({name, phone}, contacts) =>{
    const dublicate = contacts.find(item => item.name.toLowerCase() === name.toLowerCase() || item.phone === phone);
    return Boolean(dublicate);
} 

export const fetchContacts = createAsyncThunk(
    "contacts/fatch",
    async(_, thunkAPI) => {
        try{
            const data = await api.getContacts();
            console.log('data', data)
            return data;
        } catch(error){
            return thunkAPI.rejectWithValue(error);
        }
    }
);

// export const fetchContacts = () =>{
//     const func = async(dispatch) =>{
//         try{
//             dispatch(actions.fetchContactsLoading());
//             const data = await api.getContacts();
//             dispatch(actions.fetchContactsSuccsess(data));
//         }
//         catch(error){
//             dispatch(actions.fetchContactsError(error.massage));
//         }
//     }
//     return func;
// }

export const addContacts = createAsyncThunk(
    "contacts/add",
    async(data, {rejectWithValue}) =>{
        try{
            const result = await api.addContacts(data);
            return result;
        }
        catch(error){
            return rejectWithValue(error);
        }
    },
    {
        condition: (data, {getState}) =>{
            const {contacts} = getState();
            if(doubleСontacts(data, contacts.items)){
                Notify.warning(`${data.name.toUpperCase()} contact already exists`);
                return false;
            }
        }
    }
);

// export const addContacts = (data) =>{
//     const func = async(dispatch, getState) =>{
        
//         const {contacts} = getState();

//         if(doubleСontacts(data, contacts.items)){
//                 Notify.warning(`${data.name.toUpperCase()} contact already exists`);
//                 return;
//         }

//         try{
//             dispatch(actions.addContactsLoading());
//             const result = await api.addContacts(data);
//             dispatch(actions.addContactsSuccsess(result));
//         }
//         catch(error){
//             dispatch(actions.addContactsError(error.massage));
//         }
//     }
//     return func;
// }

export const removeContacts = createAsyncThunk(
    "contacts/remove",
    async(id, {rejectWithValue}) =>{
        try{
            await api.removeContacts(id);
            return id;
        }
        catch(error){
            return rejectWithValue(error);
        }
    }
);

// export const removeContacts = (id) =>{
//     const func = async(dispatch) =>{

//         try{
//             dispatch(actions.removeContactsLoading());
//             await api.removeContacts(id);
//             dispatch(actions.removeContactsSuccsess(id));
//         }
//         catch(error){
//             dispatch(actions.removeContactsError(error.massage));
//         }
//     }
//     return func;
// }

