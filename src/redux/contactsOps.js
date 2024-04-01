import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://660a6ff80f324a9a28850459.mockapi.io";

export const fetchContacts = createAsyncThunk()
export const addContacts = createAsyncThunk()
export const deleteContacts = createAsyncThunk()