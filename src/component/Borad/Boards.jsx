import React, { Component } from 'react';
import Board from './Board';

export default class Boards extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<Board />
				</div>
			</div>
		);
	}
}
