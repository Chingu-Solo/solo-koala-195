import React from "react";
import Header from "./Header";
import Months from "./Months";
import Week from "./Week";
import Days from "./Days";
import classes from "./Calendar.module.css";

const Calendar = ({
	dateC,
	dateE,
	handleArrowClick,
	handleDayClick,
	selected,
}) => {
	return (
		<div className={classes.container}>
			<Header date={dateC} />
			<Months date={dateC} />
			<Week />
			<Days
				dateC={dateC}
				dateE={dateE}
				onArrowClick={handleArrowClick}
				onDayClick={handleDayClick}
				selected={selected}
			/>
		</div>
	);
};

export default Calendar;
