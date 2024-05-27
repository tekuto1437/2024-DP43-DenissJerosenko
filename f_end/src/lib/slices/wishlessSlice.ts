import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Product } from '../types';

export interface ItemWishless extends Product {
    wishless?: boolean,
}

const initialState = {
    elements: <ItemWishless[]>[]
}

export const wishlessSlice = createSlice({
	name: 'wishless',
	initialState,
	reducers: {
		addWish: (state, action: PayloadAction<ItemWishless>) => {
            state.elements.push(action.payload);
		},
		remWish: (state, action: PayloadAction<ItemWishless>) => {
            state.elements = state.elements.filter(item => item.id !== action.payload.id);
		}
	}
});

export const { addWish, remWish} = wishlessSlice.actions;
