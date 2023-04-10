import { configureStore, createSlice } from "@reduxjs/toolkit";

export interface storeData {
    data: any[];
    step: number;
}

export interface storeAction {
    payload: any;
    type: string;
}

const dataSlice = createSlice({
    name: 'dataStore',
    initialState: { data: [], step: 0 },
    reducers: {
        storeData(state: storeData , action: storeAction) {
            // Storing the data passed from every separate step
            state.data = [...state.data, action.payload];
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
