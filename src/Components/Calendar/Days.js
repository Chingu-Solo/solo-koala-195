import React from "react";
import classes from "./Days.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const currMonthEnd = (date) => {
	return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};

const currMonthstart = (date) => date.getDay();

const prevMonthEnd = (date) => {
	return new Date(date.getFullYear(), date.getMonth(), 0).getDate();
};

const nextMonthStart = (total, cme, start) => total - cme - start;

const createDays = (date) => {
	const days = [];
	date.setDate(1);
	const today = new Date();

	for (
		let i = prevMonthEnd(date) - currMonthstart(date) + 1;
		i <= prevMonthEnd(date);
		i++
	) {
		days.push(<div className={classes.prev_month_day}>{i}</div>);
	}

	for (let i = 1; i <= currMonthEnd(date); i++) {
		if (i === today.getDate() && today.getMonth() === date.getMonth()) {
			days.push(<div className={classes.today}>{i}</div>);
		} else {
			days.push(<div>{i}</div>);
		}
	}

	for (
		let i = 1;
		i <= nextMonthStart(42, currMonthEnd(date), currMonthstart(date));
		i++
	) {
		days.push(<div className={classes.next_month_day}>{i}</div>);
	}
	return days;
};

const Days = ({ date, onClick }) => {
	return (
		<div className={classes.container}>
			<div className={classes.prev_month} onClick={() => onClick("prev")}>
				<FontAwesomeIcon icon={faArrowLeft} size="3x" />
			</div>
			<div className={classes.days}>{createDays(date)}</div>
			<div className={classes.prev_month} onClick={() => onClick("next")}>
				<span>
					<FontAwesomeIcon icon={faArrowRight} size="3x" />
				</span>
			</div>
		</div>
	);
};

export default Days;
