import React, { Component } from 'react';

export default class Note extends Component {
	render() {
		const style = `${this.props.bg} card-panel lighten-5`;
		return <div className={style}>{this.props.name}</div>;
	}
}
