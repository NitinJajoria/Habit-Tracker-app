import React, { useState } from "react";
import { Link } from "react-router-dom";
import CreateHabit from "./CreateHabit";

const Header = () => {
	const curr_date = new Date().toDateString();
	let [open, setOpen] = useState(false);
	let [showCreateHabit, setShowCreateHabit] = useState(false);
	return (
		<>
			<div className="shadow-md w-full sticky top-0 left-0 ">
				<div className="md:flex items-center justify-between bg-white md:px-7 px-5 h-14">
					<div className="font-bold text-2xl flex items-center gap-3">
						<img
							src="https://cdn-icons-png.flaticon.com/128/4807/4807720.png"
							width="30"
							height="30"
							alt="app-logo"
						/>{" "}
						<span className=" text-blue-600">Habit Tracker</span>
					</div>

					<ul
						className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
							open ? "top-15" : "top-[-490px]"
						}`}
					>
						{/* For todays date */}
						<li className="md:ml-8 md:my-0 my-7 font-semibold">
							<span className="text-black hover:text-green-400 duration-500">
								{curr_date}
							</span>
						</li>
						<li>
							{/* For Home Button */}
							<Link to="/">
								<button className="text-black font-semibold px-3 hover:text-green-400 duration-500">
									Home
								</button>
							</Link>
						</li>
						<li>
							{/* For Weekview Button */}
							<Link to="/weekview">
								<button className="text-black font-semibold px-3 hover:text-green-400 duration-500">
									Week View
								</button>
							</Link>
						</li>
						<li>
							{/* For Add Habit Button */}
							<button
								onClick={() => {
									setShowCreateHabit(true);
									setOpen(false);
								}}
								className="btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded active:scale-90 md:static"
							>
								Add Habit
							</button>
						</li>
					</ul>
				</div>

				{/* show Add habit */}
				<CreateHabit
					show={showCreateHabit}
					onClose={() => setShowCreateHabit(false)}
				/>
			</div>
		</>
	);
};

export default Header;
