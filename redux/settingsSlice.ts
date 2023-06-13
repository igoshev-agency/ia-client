import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SettingsSlice {
	language: string
}

const initialState: SettingsSlice = {
	language: 'en'
}

export const settingsSlice = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		setLanguage: (state: SettingsSlice, action: PayloadAction<string>) => {
			state.language = action.payload
		},
	},
})

export const { setLanguage } = settingsSlice.actions

export default settingsSlice.reducer