import storage from "redux-persist/lib/storage";
import { contactsReducer } from "./contactsSlice";
import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filtersSlice";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
};

const persistedReducer = persistReducer(persistConfig, contactsReducer)

export const store = configureStore({
    reducer: {
        contacts: persistedReducer,
        filters: filtersReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
})

export const persistor = persistStore(store)