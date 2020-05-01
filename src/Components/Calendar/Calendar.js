import React, { Component } from "react";
import classes from "./Calendar.module.css";

class Calendar extends Component {
	state = {
		date: new Date(),
	};
	render() {
		return (
			<div className={classes.container}>
				<header className={classes.header}>
					<h1>eCalendar</h1>
					<p>{this.state.date.getFullYear()}</p>
				</header>
			</div>
		);
	}
}

export default Calendar;
