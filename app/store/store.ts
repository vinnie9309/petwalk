import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit/dist/createSlice";

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
 
export const { storeData } = dataSlice.actions;
export default store;
