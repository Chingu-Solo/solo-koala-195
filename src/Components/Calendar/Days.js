import React from "react";
import classes from "./Days.module.css";
import * as utils from "../../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import uniqid from "uniqid";

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

const Days = ({ dateC, dateE, onArrowClick, onDayClick, selected }) => {
	const days = utils.calendarDays(dateC).map((elm) => {
		const today = new Date();
		const props = {
			key: uniqid(elm.day),
			day: elm.day,
		};
		if (!elm.curr) {
			props.not_curr = true;
		} else {
			props.onDayClick = onDayClick;
			props.date = dateC;
			if (elm.day === selected && dateC.getMonth() === dateE.getMonth()) {
				props.selected = true;
			}
			if (
				elm.day === today.getDate() &&
				today.getMonth() === dateC.getMonth()
			) {
				props.today = true;
			}
		}
		return <Day {...props} />;
	});

	return (
		<div className={classes.container}>
			<div className={classes.prev_month} onClick={() => onArrowClick("prev")}>
				<FontAwesomeIcon icon={faArrowLeft} size="3x" />
			</div>
			<div className={classes.days}>{days}</div>
			<div className={classes.prev_month} onClick={() => onArrowClick("next")}>
				<FontAwesomeIcon icon={faArrowRight} size="3x" />
			</div>
		</div>
	);
};

export default Days;
