import { configureStore, createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: 'dataStore',
    initialState: { data: [], step: 0 },
    reducers: {
        storeData(state) {
            console.log(state);
        },
        nextStep(state) {
            state.step = state.step + 1;
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
