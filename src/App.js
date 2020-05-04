import React, { Component } from "react";
import Calendar from "./Components/Calendar/Calendar";
import Event from "./Components/Event/Event";
import "./App.css";

class App extends Component {
	state = {
		dateCalendar: new Date(),
		dateEvent: new Date(),
		selected: new Date().getDate(),
		events: [],
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
				<Event date={this.state.dateEvent} />
			</div>
		);
	}
}

export default App;
