import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import WeekViewPage from "./components/WeekViewPage";
import Header from "./components/Header";
import Element from "./components/Element";

const App = () => {
	return (
		<>
			<Router>
				<main className="w-full h-screen pb-5">
					<Header />
					<Element />
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/weekview" element={<WeekViewPage />} />
					</Routes>
				</main>
			</Router>
		</>
	);
};

export default App;
