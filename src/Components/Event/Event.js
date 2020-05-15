import React from "react";
import SingnIn from "./SignIn/SignIn";
import Date from "./Date/DateComponent";
import ListEvent from "./ListEvent/ListEvent";
import Modal from "./Modal/Modal";
import classes from "./Event.module.css";
import autumnBg from "./images/autumn-min.jpg";
import winterBg from "./images/winter-min.jpg";
import springBg from "./images/spring-min.jpg";
import summerBg from "./images/summer-min.jpg";

const Event = ({ dateE, dateC, events }) => {
	let bg_image = "";
	const month = dateC.getMonth();
	if (month > 1 && month < 5) bg_image = springBg;
	else if (month > 4 && month < 8) bg_image = summerBg;
	else if (month > 7 && month < 11) bg_image = autumnBg;
	else bg_image = winterBg;

	return (
		<div
			className={classes.container}
			style={{ backgroundImage: `url(${bg_image})` }}
		>
			<div className={classes.transBack} />
			<SingnIn />
			<Date date={dateE} />
			<ListEvent events={events} />
			<Modal />
		</div>
	);
};

export default Event;
