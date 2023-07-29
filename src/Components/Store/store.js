import { configureStore } from "@reduxjs/toolkit";

import departamentosReducer from '../Features/departamentoSlice'
import ocupacionesReducer from '../Features/ocupacionesSlice.js'
import ciudadesReducer from '../Features/ciudadSlice.js'

export const store=configureStore({
    reducer:{
        departamentos:departamentosReducer,
        ocupaciones:ocupacionesReducer,
        ciudades:ciudadesReducer
    }
})