import React, { Component } from "react";
import "./ClearButton.css";

class ClearButton extends Component {
	render() {
		return <div className="clr-btn">{this.props.children}</div>;
	}
}

export default ClearButton;
