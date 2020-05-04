import React from "react";
import classes from "./DateComponent.module.css";

const DateComponent = ({ date }) => {
	let weekDay = date.toLocaleString("default", { weekday: "long" });
	weekDay = weekDay.charAt(0).toUpperCase() + weekDay.slice(1);
	const month = date
		.toLocaleString("default", { month: "long" })
		.toLocaleUpperCase();

	return (
		<div className={classes.container}>
			<span>{weekDay}</span>
			<span>{month + " " + date.getDate()}</span>
		</div>
	);
};

export default DateComponent;
