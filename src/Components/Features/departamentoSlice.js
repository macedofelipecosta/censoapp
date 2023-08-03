import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    departamentos: [],
    departamento: [],
    
}



export const departamentoSlice = createSlice({
    name: 'getDepartamentos',
    initialState,
    reducers: {
        guardarDepartamentos: (state, action) => {
            state.departamentos.push(action.payload)
        },
        guardarDepartamento: (state, action) => {
            state.departamento = []
            state.departamento.push(action.payload)
        },
        resetearDepartamento: (state) => {
            state.departamento = []
        }

    }
})

export const { guardarDepartamentos, guardarDepartamento, resetearDepartamento } = departamentoSlice.actions;
export default departamentoSlice.reducer;


