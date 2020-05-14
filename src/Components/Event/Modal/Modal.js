import React, { Component } from "react";
import classes from "./Modal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

class Modal extends Component {
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

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState((prevState) => ({
			visible: !prevState.visible,
		}));
	};

	render() {
		return (
			<div className={classes.container}>
				<div className={classes.plus} onClick={this.handleClick}>
					<FontAwesomeIcon icon={faPlus} size="5x" />
				</div>
				{this.state.visible && (
					<div className={classes.modal}>
						<div className={classes.modal_content} ref={this.modalRef}>
							<form
								className={classes.form}
								onSubmit={(e) => this.handleSubmit(e)}
							>
								<div className={classes.inputContainer}>
									<label>Title:</label>
									<input type="text" name="title" required />
								</div>
								<div className={classes.dateContainer}>
									<div>
										<label>Start Date :</label>
										<input type="date" name="startDate" required />
									</div>
									<div>
										<label>End Date :</label>
										<input type="date" name="endDate" required />
									</div>
								</div>
								<div className={classes.timeContainer}>
									<div>
										<label>Begins:</label>
										<input type="time" name="begin" />
									</div>
									<div>
										<label>Ends:</label>
										<input type="time" name="end" />
									</div>
								</div>
								<div className={classes.inputContainer}>
									<label>People:</label>
									<input type="text" name="people" />
								</div>
								<div className={classes.inputContainer}>
									<label>Location:</label>
									<input type="text" name="location" />
								</div>
								<div className={classes.inputContainer}>
									<label>Description:</label>
									<input type="text" name="description" />
								</div>
								<div className={classes.btnContainer}>
									<button type="submit">Add Event</button>
								</div>
							</form>
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default Modal;
