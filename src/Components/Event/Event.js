import React from "react";
import SingnIn from "./SignIn";
import Date from "./DateComponent";
import ListEvent from "./ListEvent";
import AddEvent from "./AddEvent";
import classes from "./Event.module.css";

const Event = ({ date }) => {
	return (
		<div className={classes.container}>
			<div className={classes.transBack} />
			<SingnIn />
			<Date date={date} />
			<ListEvent />
			<AddEvent />
		</div>
	);
};

export default Event;
