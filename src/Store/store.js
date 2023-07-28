import { configureStore } from "@reduxjs/toolkit";

import departamentoReducer from '../Features/departamentoSlice'

export const store=configureStore({
    reducer:{
        departamento:departamentoReducer
    }
})