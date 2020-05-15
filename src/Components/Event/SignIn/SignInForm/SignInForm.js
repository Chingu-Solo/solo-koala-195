import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import classes from "./SignInForm.module.css";

const initialValues = {
	email: "",
	password: "",
};

const onSubmit = (values, actions) => {
	console.log(values);
	actions.handleClick();
};

const validationSchema = yup.object({
	email: yup.string().email("Invalid email!").required("Required*"),
	password: yup
		.string()
		.min(8, "Password must contains at least 8 characters!")
		.required("Required*"),
});

export default function SignInForm(props) {
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={(values, actions) => {
				actions.handleClick = props.handleClick;
				return onSubmit(values, actions);
			}}
			validationSchema={validationSchema}
		>
			<Form className={classes.form}>
				<h1>Sign In</h1>
				<div className={classes.form_control}>
					<div className={classes.form_input}>
						<label className={classes.label} htmlFor="email">
							E-mail :
						</label>
						<Field
							className={classes.input}
							type="email"
							id="email"
							name="email"
						/>
					</div>
					<div className={classes.error}>
						<ErrorMessage name="email" />
					</div>
				</div>

				<div className={classes.form_control}>
					<div className={classes.form_input}>
						<label className={classes.label} htmlFor="password">
							Password :
						</label>
						<Field
							className={classes.input}
							type="password"
							id="password"
							name="password"
						/>
					</div>
					<div className={classes.error}>
						<ErrorMessage name="password" />
					</div>
				</div>

				<button className={classes.submit_btn} type="submit">
					Submit
				</button>
			</Form>
		</Formik>
	);
}
