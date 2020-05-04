import React from "react";
import classes from "./Week.module.css";

const Week = () => {
	const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
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
