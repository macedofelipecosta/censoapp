import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ocupaciones: [],
    ocupacion: []
}






export const ocupacionesSlice = createSlice({
    name: 'ocupaciones',
    initialState,
    reducers: {
        guardarOcupaciones: (state, action) => {
            state.ocupaciones.push(action.payload)
        },
        guardarOcupacion: (state, action) => {
            state.ocupacion.push(action.payload)
        },
        resetearOcupacion: (state) => {
            state.ocupacion = []
        }
    }
})

export const { guardarOcupaciones, guardarOcupacion, resetearOcupacion } = ocupacionesSlice.actions;
export default ocupacionesSlice.reducer;