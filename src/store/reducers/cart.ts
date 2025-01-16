import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import React, { createContext, useContext, useReducer, ReactNode } from 'react'
import { CartItem } from '../../components/Cart/styles'
import Product from '../../components/Product'

type CartState = {
  items: Pasta[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Pasta>) => {
      //const pasta = state.items.find((item) => item.id === action.payload.id)
      const pasta = state.items.find((item) => item.id != action.payload.id)

      if (!pasta) {
        state.items.push(action.payload)
      } else {
        alert('A massa já está no carrinho')
        // return state.items.length + 1
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const { add, open, close, remove, clear } = cartSlice.actions
export default cartSlice.reducer
