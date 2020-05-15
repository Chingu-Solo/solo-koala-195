import React, { Component } from "react";
import Calendar from "./Components/Calendar/Calendar";
import Event from "./Components/Event/Event";
import "./App.css";

class App extends Component {
	state = {
		dateCalendar: new Date(),
		dateEvent: new Date(),
		selected: new Date().getDate(),
		events: [
			{ id: 1, begin: "10:30", title: "Goat Yoga" },
			{ id: 2, begin: "11:00", title: "Hot Yoga" },
			{ id: 3, begin: "11:30", title: "Perpetual Yoga" },
		],
	};

	handleArrowClick = (param) => {
		const { dateCalendar } = this.state;
		if (param === "prev") {
			dateCalendar.setMonth(dateCalendar.getMonth() - 1);
		} else {
			dateCalendar.setMonth(dateCalendar.getMonth() + 1);
		}
		this.setState({ dateCalendar });
	};

	handleDayClick = (dt, month, year) => {
		const date = new Date(month + 1 + "/" + dt + "/" + year);
		this.setState({ dateEvent: date, selected: dt });
	};

	render() {
		return (
			<div className="App">
				<Calendar
					dateC={this.state.dateCalendar}
					dateE={this.state.dateEvent}
					handleArrowClick={this.handleArrowClick}
					handleDayClick={this.handleDayClick}
					selected={this.state.selected}
				/>
				<Event
					dateE={this.state.dateEvent}
					dateC={this.state.dateCalendar}
					events={this.state.events}
				/>
			</div>
		);
	}
}

export default App;
