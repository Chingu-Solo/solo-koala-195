import React, { Component } from "react";
import Header from "./Header";
import Months from "./Months";
import Week from "./Week";
import Days from "./Days";
import classes from "./Calendar.module.css";

class Calendar extends Component {
	state = {
		date: new Date(),
	};

	handleClick = (param) => {
		const { date } = this.state;
		if (param === "prev") {
			date.setMonth(date.getMonth() - 1);
		} else {
			date.setMonth(date.getMonth() + 1);
		}
		this.setState({ date });
	};
	render() {
		return (
			<div className={classes.container}>
				<Header date={this.state.date} />
				<Months date={this.state.date} />
				<Week date={this.state.date} />
				<Days date={this.state.date} onClick={this.handleClick} />
			</div>
		);
	}
}

export default Calendar;
