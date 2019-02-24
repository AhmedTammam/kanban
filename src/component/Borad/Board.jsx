import React, { Component } from 'react';
import NoteForm from './NoteForm';
import BoardHeader from './BoardHeader';
import BoardBody from './BoardBody';

export default class Board extends Component {
	render() {
		const { name, color, code } = this.props;
		return (
			<div className="col s3">
				<div className=" card">
					<BoardHeader name={name} color={color} index={code} />
					<NoteForm parent={code} color={color} />
					<BoardBody parent={code} color={color} />
				</div>
			</div>
		);
	}
}
