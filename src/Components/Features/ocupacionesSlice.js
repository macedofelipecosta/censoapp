import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ocupaciones: []
}






export const ocupacionesSlice = createSlice({
    name: 'ocupaciones',
    initialState,
    reducers: {
        guardarOcupaciones: (state, action) => {
            state.ocupaciones.push(action.payload)
        }
    }
})

export const { guardarOcupaciones } = ocupacionesSlice.actions;
export default ocupacionesSlice.reducer;