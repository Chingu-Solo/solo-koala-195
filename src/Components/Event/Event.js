import React, { Component } from "react";
import SingnIn from "./SignIn";
import Date from "./DateComponent";
import ListEvent from "./ListEvent";
import AddEvent from "./AddEvent";
import classes from "./Event.module.css";

class Event extends Component {
	state = {
		events: [],
	};
	render() {
		return (
			<div className={classes.container}>
				<div className={classes.transBack} />
				<SingnIn />
				<Date />
				<ListEvent />
				<AddEvent />
			</div>
		);
	}
}

export default Event;
