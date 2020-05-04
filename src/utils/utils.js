export const currMonthEnd = (date) => {
	return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};

export const currMonthStart = (date) => date.getDay();

export const prevMonthEnd = (date) => {
	return new Date(date.getFullYear(), date.getMonth(), 0).getDate();
};

export const nextMonthStart = (total, cme, start) => total - cme - start;

export const prevMonthDays = (date) => {
	const days = [];
	const pme = prevMonthEnd(date);
	const cms = currMonthStart(date);
	for (let i = pme - cms + 1; i <= pme; i++) {
		days.push({ day: i, curr: false });
	}
	return days;
};

export const currMonthDays = (date) => {
	const days = [];
	const cme = currMonthEnd(date);
	for (let i = 1; i <= cme; i++) {
		days.push({ day: i, curr: true });
	}
	return days;
};

export const nextMonthDays = (date) => {
	const days = [];
	const cms = currMonthStart(date);
	const cme = currMonthEnd(date);
	const nms = nextMonthStart(42, cme, cms);
	for (let i = 1; i <= nms; i++) {
		days.push({ day: i, curr: false });
	}
	return days;
};

export const calendarDays = (date) => {
	date.setDate(1);
	return prevMonthDays(date).concat(currMonthDays(date), nextMonthDays(date));
};
