import React, { useId, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addHabit, weekdays } from "../redux/habitReducer";
import { v4 as uuidv4 } from "uuid";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateHabit = (props) => {
	const { show, onClose } = props;
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [habitText, setHabitText] = useState("");

	// handle new habits
	const AddHabitHandler = () => {
		dispatch(
			addHabit({
				id: uuidv4(),
				title: habitText,
				weekdays,
			})
		);
		// Alert Message
		toast.success("Success Habit Created", {
			position: toast.POSITION.TOP_RIGHT,
			autoClose: 800,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "colored",
		});
		onClose();
		navigate("/", { replace: true });
	};
	//handle close
	const handleClose = (e) => {
		if (e.target.id === "wrapper") {
			onClose();
			navigate("/", { replace: true });
		}
	};
	//if show==false don't return anything
	if (!show) {
		return null;
	}
	return (
		<div
			className="fixed inset-0  bg-gray-800 bg-opacity-25 backdrop-blur-sm flex justify-center text-white"
			id="wrapper"
			onClick={handleClose}
		>
			<div className="w-2/3 md:w-1/3 h-1/4 md:h-2/4 p-2 rounded flex flex-col">
				<div className="mt-20 p-2 bg-white rounded  text-gray-900">
					<div className="p-6 lg:px-8 text-left">
						<h3 className="mb-2 text-2xl">Enter New Habit</h3>
						<hr />
						<form className="mt-2 space-y-6">
							<div>
								<input
									className="bg-gray-50 border border-gray-300 text-base rounded-lg 
                                    focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
									placeholder="Enter here"
									required
									type="text"
									value={habitText}
									onChange={(e) => setHabitText(e.target.value)}
								></input>
							</div>

							{/* Add button */}
							<div className="flex justify-between">
								<button
									className="text-white text-center  bg-blue-400 hover:bg-blue-900
                                    focus:ring-4 focus:outline-none rounded-lg px-5 py-2.5 active:scale-90"
									type="button"
									onClick={AddHabitHandler}
								>
									Add
								</button>

								{/* close button */}
								<Link to={"/"}>
									<button
										className="text-white text-center  bg-red-400 hover:bg-red-900
                                        focus:ring-4 focus:outline-none rounded-lg px-5 py-2.5 active:scale-90"
										onClick={onClose}
									>
										Close
									</button>
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
			<ToastContainer />
		</div>
	);
};

export default CreateHabit;
