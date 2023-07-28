import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    departamentos: []
}






export const departamentoSlice = createSlice({
    name: 'departamentos',
    initialState,
    reducers: {
        guardarDepartamentos: (state, action) => {
            state.departamentos.push(action.payload)
        }
    }
})

export const { guardarDepartamentos } = departamentoSlice.actions;
export default departamentoSlice.reducer;


