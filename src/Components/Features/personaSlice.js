import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    personas: [],
    persona: []
}






export const personaSlice = createSlice({
    name: 'personas',
    initialState,
    reducers: {
        guardarPersonas: (state, action) => {
            state.personas.push(action.payload)
        },
        guardarPersona: (state, action) => {
            state.persona.push(action.payload)
        },
        eliminarPersona: (state, action) => {
            state.personas = state.personas.filter(p => p.id !== +action.payload)
        }
    }
})

export const { guardarPersonas, guardarPersona, eliminarPersona } = personaSlice.actions;
export default personaSlice.reducer;