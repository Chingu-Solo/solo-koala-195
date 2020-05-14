import React from "react";
import classes from "./Day.module.css";

const Day = (props) => {
	if (props.not_curr)
		return <div className={classes["not_curr"]}>{props.day}</div>;
	return (
		<div
			onClick={() => {
				props.onDayClick(
					props.day,
					props.date.getMonth(),
					props.date.getFullYear()
				);
			}}
			className={`${props.today ? classes["today"] : ""} 
			${props.selected ? classes["selected"] : ""}			
			`}
		>
			{props.day}
		</div>
	);
};

export default Day;
