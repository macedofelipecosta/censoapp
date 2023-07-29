import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todas:[],
    ciudades: [],
    ciudad: []
}


export const ciudadSlice = createSlice({
    name: 'ciudades',
    initialState,
    reducers: {
        guardarTodas: (state, action)=>{
            state.todas.push(action.payload)
        },
        guardarCiudades: (state, action) => {

            state.ciudades.push(action.payload)
        },
        guardarCiudad: (state, action) => {
            state.ciudad = [];
            state.ciudad.push(action.payload);
        },
        resetearCiudades: (state) => {
            state.ciudades = []
        }
    }
})

export const { guardarCiudades, guardarCiudad, resetearCiudades,guardarTodas } = ciudadSlice.actions;
export default ciudadSlice.reducer;
