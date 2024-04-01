import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://660a6ff80f324a9a28850459.mockapi.io";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll", async (_, thunkApi) => {
        try {
            const res = await axios.get("/contacts")
            return res.data
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)

export const addContacts = createAsyncThunk(
    "tasks/addContact", async (values, thunkApi) => {
        try {
            const res = await axios.post("/contacts", {name:values.name, phone: values.phone})
            return res.data
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)

export const deleteContacts = createAsyncThunk(
    "tasks/deleteContact", async (contactId, thunkApi) => {
        try {
            const res = await axios.delete(`/contacts/${contactId}`)
            return res.data
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)