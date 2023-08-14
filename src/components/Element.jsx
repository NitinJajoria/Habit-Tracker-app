import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

// Setting Typed Effect
const Element = () => {
	const el = useRef(null);

	useEffect(() => {
		const typed = new Typed(el.current, {
			strings: [
				"...okay. Let's start by tracking a habit for next seven days.",
				"It's never too late to develop good habits.",
				"Good habits formed at youth makes all the difference - Aristotle",
				"Motivation is what gets you started. Habit is what keeps you going.",
				"Habits change into character.",
			],
			startDelay: 2000,
			typeSpeed: 40,
			backSpeed: 20,
			backDelay: 5000,
			loop: true,
			shuffle: true,
		});

		return () => {
			// Destroy Typed instance during cleanup to stop animation
			typed.destroy();
		};
	}, []);
	return (
		<div className="font-bold text-2xl flex items-center justify-center mt-3">
			<span ref={el} />
		</div>
	);
};

export default Element;
