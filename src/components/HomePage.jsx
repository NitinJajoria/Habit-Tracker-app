import React from "react";
import { useSelector } from "react-redux";
import HabitList from "./HabitList";

const HomePage = () => {
	const habitsDetails = useSelector((state) => state.habits);
	const { habits } = habitsDetails;

	return (
		<>
			{/* Main Container */}
			{habits.length === 0 ? (
				// if no habits created by the user show below image
				<div className="flex flex-col justify-center items-center">
					<h1 className="text-4xl text-bold my-4">NO HABITS TO DISPLAY</h1>
					<img
						src="https://cdn-icons-png.flaticon.com/128/9961/9961902.png"
						height="300px"
						width="300px"
						alt="nothing-icon"
					/>
				</div>
			) : (
				// once user created the new habit then show Habits in a List
				<div className=" w-full flex flex-col gap-y-2 pt-10 items-center">
					{habits.map((habit, index) => (
						<HabitList key={index} habit={habit} />
					))}
				</div>
			)}
		</>
	);
};

export default HomePage;
