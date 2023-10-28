import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  chairBooking: [],
  chairBooked: [],
}

export const BTDatVeSlice = createSlice({
  name: 'BTDatVe',
  initialState,
  reducers: {
    setChairBooking: (state, action) => {
      const index = state.chairBooking.findIndex(
        (x) => x.soGhe === action.payload.soGhe
      )

      if (index !== -1) {
        state.chairBooking.splice(index, 1)
      } else {
        state.chairBooking.push(action.payload)
      }
    },
    setChairBooked: (state, action) => {
      state.chairBooked = [...state.chairBooked, ...state.chairBooking]
      state.chairBooking = []
    },
    cancelChair: (state, action) => {
      state.chairBooking = state.chairBooking.filter(
        (x) => x.soGhe !== action.payload
      )
    },
  },
})

export const { reducer: btDatVeReducer, actions: btDatVeActions } = BTDatVeSlice
