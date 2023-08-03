import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalCenso: 0
}


export const censadoSlice = createSlice({
    name: 'censados',
    initialState,
    reducers: {
        setCensados: (state, action) => {
            state.totalCenso = (action.payload)
        }
    }
})

export const { setCensados } = censadoSlice.actions;
export default censadoSlice.reducer;