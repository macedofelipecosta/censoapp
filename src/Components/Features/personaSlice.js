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
            const ind=state.personas.indexOf(p=>p['id']===action.payload)
            const index = state.personas.findIndex(p => p['id'] === action.payload);

            if (ind !== -1) {
            
                state.personas.splice(index, 1);
            }
        }
    }
})

export const { guardarPersonas, guardarPersona, eliminarPersona } = personaSlice.actions;
export default personaSlice.reducer;