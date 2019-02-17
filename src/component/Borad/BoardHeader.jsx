import React, { Component } from 'react';

export default class BoardHeader extends Component {
	render() {
		const style = `${this.props.color} white-text center-align card-header`;
		return (
			<div className={style}>
				<span className="card-title">{this.props.name}</span>
			</div>
		);
	}
}
