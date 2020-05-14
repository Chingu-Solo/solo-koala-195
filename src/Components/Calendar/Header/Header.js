import React from "react";
import classes from "./Header.module.css";

const Header = ({ date }) => {
	return (
		<div className={classes.container}>
			<h1>eCalendar</h1>
			<p>{date.getFullYear()}</p>
		</div>
	);
};

export default Header;
