import React from "react";
import SingnIn from "./SignIn";
import Date from "./DateComponent";
import ListEvent from "./ListEvent";
import Modal from "./Modal";
import classes from "./Event.module.css";

const Event = ({ date, events }) => {
	return (
		<div className={classes.container}>
			<div className={classes.transBack} />
			<SingnIn />
			<Date date={date} />
			<ListEvent events={events} />
			<Modal />
		</div>
	);
};

export default Event;
