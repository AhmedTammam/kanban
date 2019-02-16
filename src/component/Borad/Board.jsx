import React, { Component } from 'react';
import BoardHeader from './BoardHeader';
import BoardBody from './BoardBody';

export default class Board extends Component {
	render() {
		return (
			<div className="col s3 card no-padding">
				<BoardHeader />
				<BoardBody />
			</div>
		);
	}
}
