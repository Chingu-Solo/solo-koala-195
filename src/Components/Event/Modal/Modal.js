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
									<label className={classes.label}>Title:</label>
									<input
										className={classes.input}
										type="text"
										name="title"
										required
									/>
								</div>
								<div className={classes.dateContainer}>
									<div>
										<label className={classes.label}>Start Date :</label>
										<input
											className={classes.input}
											type="date"
											name="startDate"
											required
										/>
									</div>
									<div>
										<label className={classes.label}>End Date :</label>
										<input
											className={classes.input}
											type="date"
											name="endDate"
											required
										/>
									</div>
								</div>
								<div className={classes.timeContainer}>
									<div>
										<label className={classes.label}>Begins:</label>
										<input className={classes.input} type="time" name="begin" />
									</div>
									<div>
										<label className={classes.label}>Ends:</label>
										<input className={classes.input} type="time" name="end" />
									</div>
								</div>
								<div className={classes.inputContainer}>
									<label className={classes.label}>People:</label>
									<input className={classes.input} type="text" name="people" />
								</div>
								<div className={classes.inputContainer}>
									<label className={classes.label}>Location:</label>
									<input
										className={classes.input}
										type="text"
										name="location"
									/>
								</div>
								<div className={classes.inputContainer}>
									<label className={classes.label}>Description:</label>
									<input
										className={classes.input}
										type="text"
										name="description"
									/>
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
