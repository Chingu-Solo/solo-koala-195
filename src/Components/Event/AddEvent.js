import React from "react";
import classes from "./AddEvent.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddEvent = () => {
	return (
		<div className={classes.container}>
			<span className={classes.plus}>
				<FontAwesomeIcon icon={faPlus} size="5x" />
			</span>
		</div>
	);
};

export default AddEvent;
