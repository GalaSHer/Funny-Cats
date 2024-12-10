import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
	TypedUseSelectorHook,
	useDispatch as dispatchHook,
	useSelector as selectorHook,
} from 'react-redux'
import { reducer as productsReducer } from './slices/productsSlice'


export const rootReducer = combineReducers({
	allproducts: productsReducer
})

const store = configureStore({
	reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useDispatch: () => AppDispatch = () => dispatchHook()
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook

export default store