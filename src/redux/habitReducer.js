import { createSlice } from "@reduxjs/toolkit";

// To Track Habit for 7 Days
export const weekdays = [
	{ day: "Monday", status: "none" },
	{ day: "Tuesday", status: "none" },
	{ day: "Wednesday", status: "none" },
	{ day: "Thursday", status: "none" },
	{ day: "Friday", status: "none" },
	{ day: "Saturday", status: "none" },
	{ day: "Sunday", status: "none" },
];

// Getting previous saved habits from local storage
const habitsFromLocal = localStorage.getItem("habitsLocal")
	? JSON.parse(localStorage.getItem("habitsLocal"))
	: [];

// and setting to initial state
const initialState = {
	habits: [...habitsFromLocal],
};

const habitsSlice = createSlice({
	name: "habits",
	initialState,
	reducers: {
		// to adding new habit and simultaniously updating to local storage
		addHabit: (state, { payload }) => {
			state.habits.push(payload);
			localStorage.setItem("habitsLocal", JSON.stringify(state.habits));
		},
		// to deleting habit and simultaniously updating to local storage
		deleteHabit: (state, action) => {
			state.habits = state.habits.filter(
				(habit) => habit.id !== action.payload
			);
			localStorage.setItem("habitsLocal", JSON.stringify(state.habits));
		},
		// to change status of habit and simultaniously updating to local storage
		changeStatus: (state, { payload }) => {
			state.habits.map((habit) => {
				if (habit.title === payload.title) {
					habit.weekdays.forEach((e) => {
						if (e.day === payload.weekdays[0].day) {
							e.status = payload.weekdays[0].status;
						}
					});
				}
			});
			localStorage.setItem("habitsLocal", JSON.stringify(state.habits));
		},
	},
});

export const { addHabit, deleteHabit, changeStatus } = habitsSlice.actions;

export default habitsSlice.reducer;
