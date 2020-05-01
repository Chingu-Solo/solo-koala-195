import React from "react";
import Calendar from "./Components/Calendar/Calendar";
import Event from "./Components/Event/Event";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Calendar />
			<Event />
		</div>
	);
}

export default App;
