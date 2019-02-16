import React, { Component } from 'react';
import Note from '../Note';

export default class BoardBody extends Component {
	render() {
		return (
			<div className="card-content">
				<Note />
			</div>
		);
	}
}
