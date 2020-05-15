import React, { Component } from "react";
import classes from ".//SignIn.module.css";
import SignInForm from "./SignInForm/SignInForm";

class SignIn extends Component {
	state = {
		visible: false,
	};

	modalRef = React.createRef();

	handleClick = () => {
		if (!this.state.visible) {
			// attach/remove event handler
			document.addEventListener("click", this.handleOutsideClick, false);
		} else {
			document.removeEventListener("click", this.handleOutsideClick, false);
		}

		this.setState((prevState) => ({
			visible: !prevState.visible,
		}));
	};

	handleOutsideClick = (e) => {
		// ignore clicks on the component itself
		if (this.modalRef.current.contains(e.target)) {
			return;
		}

		this.handleClick();
	};

	render() {
		return (
			<div className={classes.container}>
				<button className={classes.signIn_btn} onClick={this.handleClick}>
					Sign in
				</button>
				{this.state.visible && (
					<div className={classes.modal}>
						<div className={classes.modal_content} ref={this.modalRef}>
							<SignInForm handleClick={this.handleClick} />
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default SignIn;
