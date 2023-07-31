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
            // Buscar el índice del objeto con el ID dado
            const index = state.personas.findIndex(obj => obj.id === action.payload);

            // Si el índice no es -1, significa que encontramos el objeto
            if (index !== -1) {
                // Eliminamos el objeto del array usando splice()
                state.personas.splice(index, 1);
            }
        }
    }
})

export const { guardarPersonas, guardarPersona, eliminarPersona } = personaSlice.actions;
export default personaSlice.reducer;