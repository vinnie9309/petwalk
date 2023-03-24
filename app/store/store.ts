import { configureStore, createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: 'dataStore',
    initialState: { data: [] },
    reducers: {
        storeData(state) {
            console.log(state);
        }
    }
});


export const store = configureStore({
    reducer: {
        dataStore: dataSlice.reducer
    }
});
 
export const storeActions  = dataSlice.actions;
export default store;
