import React, { Component } from 'react';

export default class BoardHeader extends Component {
	render() {
		return (
			<div className="blue white-text center-align">
				<span className="card-title">{this.props.name}</span>
			</div>
		);
	}
}
