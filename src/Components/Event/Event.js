import React, { Component } from "react";
import SingnIn from "./SignIn";
import Date from "./DateComponent";
import classes from "./Event.module.css";

class Event extends Component {
	render() {
		return (
			<div className={classes.container}>
				<div className={classes.transBack} />
				<SingnIn />
				<Date />
			</div>
		);
	}
}

export default Event;
