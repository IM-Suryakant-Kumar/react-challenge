import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	user: JSON.parse(localStorage.getItem("user")) || null,
}

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login: (state, action) => {
			localStorage.setItem("user", JSON.stringify(action.payload))
			state.user = action.payload
		},
		logout: (state) => {
			localStorage.removeItem("user")
			state.user = null
		},
	},
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
