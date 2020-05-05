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
			console.log(e.target);
			return;
		}

		this.handleClick();
	};

	render() {
		//console.log(this.modalRef.current);
		return (
			<div className={classes.container}>
				<span className={classes.plus} onClick={this.handleClick}>
					<FontAwesomeIcon icon={faPlus} size="5x" />
				</span>
				{this.state.visible && (
					<div className={classes.modal}>
						<div className={classes.modal_content} ref={this.modalRef}>
							<button onClick={this.handleClick}>close</button>
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default Modal;
