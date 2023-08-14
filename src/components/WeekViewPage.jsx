import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeStatus } from "../redux/habitReducer";

function WeekView() {
	const habitsDetails = useSelector((state) => state.habits);
	const { habits } = habitsDetails;
	const dispatch = useDispatch();

	// change no action to done
	const checkStatusHandler = (info) => {
		dispatch(
			changeStatus({
				title: info[0],
				weekdays: [
					{
						day: info[1],
						status: "done",
					},
				],
			})
		);
	};

	// change done to fail
	const doneStatusHandler = (info) => {
		dispatch(
			changeStatus({
				title: info[0],
				weekdays: [
					{
						day: info[1],
						status: "fail",
					},
				],
			})
		);
	};

	// change fail to no action
	const failStatusHandler = (info) => {
		dispatch(
			changeStatus({
				title: info[0],
				weekdays: [
					{
						day: info[1],
						status: "none",
					},
				],
			})
		);
	};
	return (
		<div className="w-full h-auto flex flex-col gap-y-2 py-10 items-center overflow-auto">
			{
				// Iterate over habits map
				habits.map(({ id, title, weekdays }) => (
					<div
						key={id}
						className="text-white w-4/5 bg-orange-200 border border-slate-200 rounded-lg p-4 shadow-md "
					>
						<div className="text-amber-800 mb-3">
							<span className="font-bold mx-2  text-xl capitalize">
								{title}:{" "}
							</span>
						</div>
						<div className="flex flex-wrap justify-between ">
							{/* iterate over each day status */}
							{weekdays.map(({ day, status, index }) => (
								<div key={index} className="flex flex-col items-center mx-2 ">
									<p className="text-black mb-2">{day}</p>
									{status === "none" && (
										<button
											className=" bg-slate-600 text-white font-semibold px-3 py-1 rounded  active:scale-90"
											onClick={() => checkStatusHandler([title, day])}
										>
											None
										</button>
									)}
									{status === "done" && (
										<button
											className=" bg-green-600 text-white font-semibold px-3 py-1 rounded  active:scale-90"
											onClick={() => doneStatusHandler([title, day])}
										>
											Done
										</button>
									)}
									{status === "fail" && (
										<button
											className=" bg-red-600 text-white font-semibold px-3 py-1 rounded  active:scale-90"
											onClick={() => failStatusHandler([title, day])}
										>
											Undone
										</button>
									)}
								</div>
							))}
						</div>
					</div>
				))
			}
		</div>
	);
}

export default WeekView;
