import React from "react";
import classes from "./Days.module.css";
import Day from "./Day";
import * as utils from "../../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import uniqid from "uniqid";

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
				<FontAwesomeIcon icon={faArrowLeft} />
			</div>
			<div className={classes.days}>{days}</div>
			<div className={classes.prev_month} onClick={() => onArrowClick("next")}>
				<FontAwesomeIcon icon={faArrowRight} />
			</div>
		</div>
	);
};

export default Days;
