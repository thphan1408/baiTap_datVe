import { combineReducers } from '@reduxjs/toolkit'
import { btDatVeReducer } from './BTDatVe/slice'

export const rootReducer = combineReducers({
  // state: reducer
  btDatVe: btDatVeReducer,
})
