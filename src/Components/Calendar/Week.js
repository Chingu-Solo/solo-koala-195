import React from "react";
import classes from "./Week.module.css";

const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const Week = ({ date }) => {
	return (
		<div className={classes.container}>
			<hr />
			<div className={classes.week}>
				{week.map((day) => (
					<div key={day}>{day}</div>
				))}
			</div>
		</div>
	);
};

export default Week;
