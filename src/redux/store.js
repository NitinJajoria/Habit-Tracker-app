import { configureStore } from "@reduxjs/toolkit";
import habitSlice from "./habitReducer";

// Redux Store Setup
const store = configureStore({
	reducer: {
		habits: habitSlice,
	},
});

export default store;
