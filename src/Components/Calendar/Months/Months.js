import React from "react";
import classes from "./Months.module.css";

const Months = ({ date }) => {
	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];

	return (
		<div className={classes.container}>
			<div className={classes.month + " " + classes.prev_month}>
				{date.getMonth() > 0 ? months[date.getMonth() - 1] : months[11]}
			</div>
			<div className={classes.month + " " + classes.curr_month}>
				{months[date.getMonth()]}
			</div>
			<div className={classes.month + " " + classes.next_month}>
				{date.getMonth() < 11 ? months[date.getMonth() + 1] : months[0]}
			</div>
		</div>
	);
};

export default Months;
