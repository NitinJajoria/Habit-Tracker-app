import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { deleteHabit } from "../redux/habitReducer";

const HabitList = (props) => {
	const { id, title, weekdays } = props.habit;
	const dispatch = useDispatch();
	const [doneCount, setDoneCount] = useState(0);

	// Handling Delete
	const deleteHabitHandler = (id) => {
		dispatch(deleteHabit(id));
		// Alert Message of Success
		toast.error("Success Habit Deleted", {
			position: toast.POSITION.TOP_RIGHT,
			autoClose: 800,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "colored",
		});
	};

	useEffect(() => {
		let totalDone = 0;
		weekdays.forEach((e) => {
			if (e.status === "done") {
				totalDone++;
			}
		});
		setDoneCount(totalDone);
	}, [doneCount]);

	return (
		<>
			<div className="w-4/5 h-20 p-5 bg-cyan-200 rounded shadow-md flex flex-row justify-between items-center hover:bg-orange-200">
				<div className="text-2xl capitalize ">{title}</div>
				<div className="text-2xl ">Track : {doneCount}/7</div>
				<button
					type="button"
					onClick={() => deleteHabitHandler(id)}
					className="btn bg-blue-600 text-white font-semibold px-3 py-1 rounded  active:scale-90"
				>
					Delete
				</button>
			</div>
			<ToastContainer />
		</>
	);
};

export default HabitList;
