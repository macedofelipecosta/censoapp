import { configureStore } from "@reduxjs/toolkit";

import departamentoReducer from '../Features/departamentoSlice'
import ocupacionesReducer from '../Features/ocupacionesSlice.js'

export const store=configureStore({
    reducer:{
        departamentos:departamentoReducer,
        ocupaciones:ocupacionesReducer
    }
})