import React from "react";
import classes from "./ListEvent.module.css";

const ListEvent = ({ events }) => {
	return (
		<div className={classes.container}>
			<div className={classes.vert_bar} />
			<ul className={classes.list}>
				{events.map((e) => (
					<li>{`${e.begin} ${e.title}`}</li>
				))}
			</ul>
		</div>
	);
};

export default ListEvent;
