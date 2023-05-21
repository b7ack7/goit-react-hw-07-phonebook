import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6469cae4183682d6144671ef.mockapi.io/contacts";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, {rejectWithValue}) => {
    try {
        const response = await axios.get("/contacts");
        return response.data; 
    } catch (error) {
        return rejectWithValue(error.message);
    }
  
});

export const addContact = createAsyncThunk("contacts/addContact", async ({name, phone}, {rejectWithValue}) => {
    try {
        const response = await axios.post("/contacts", {name, phone});
        return response.data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const deleteContact = createAsyncThunk("contacts/deletContact", async (id, {rejectWithValue}) => {
    try {
        const response = await axios.delete(`contacts/${id}`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})