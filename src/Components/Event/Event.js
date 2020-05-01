import React, { Component } from "react";
import classes from "./Event.module.css";

class Event extends Component {
	render() {
		return (
			<div className={classes.container}>
				<h2 className={classes.color}>Event</h2>
			</div>
		);
	}
}

export default Event;
