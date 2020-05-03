import React from "react";
import classes from "./ListEvent.module.css";

const ListEvent = () => {
	return (
		<div className={classes.container}>
			<div className={classes.vert_bar} />
			<ul className={classes.list}>
				<li>10:30 Goat Yoga</li>
				<li>11:00 Hot Yoga</li>
				<li>11:30 Perpetual Yoga</li>
			</ul>
		</div>
	);
};

export default ListEvent;
