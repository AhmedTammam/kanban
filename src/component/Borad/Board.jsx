import React, { Component } from 'react';
import NoteForm from './NoteForm';
import BoardHeader from './BoardHeader';
import BoardBody from './BoardBody';

export default class Board extends Component {
	render() {
		return (
			<div className="col s3">
				<div className=" card">
					<BoardHeader name={this.props.name} />
					<NoteForm parent={this.props.code} />
					<BoardBody parent={this.props.code} />
				</div>
			</div>
		);
	}
}
