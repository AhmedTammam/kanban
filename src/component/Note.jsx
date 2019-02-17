import React, { Component } from 'react';

export default class Note extends Component {
	render() {
		return <div className="card-panel">{this.props.name}</div>;
	}
}
