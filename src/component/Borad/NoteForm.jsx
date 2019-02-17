import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';

import { addNote } from '../../redux/actions/actionsCreator';

class NoteForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			note: {
				note: '',
				id: '',
				parent: props.parent
			}
		};

		console.log(this.props.parent);
	}

	noteChange = (e) => {
		this.setState({
			note: {
				note: e.target.value,
				id: uuid(),
				parent: this.props.parent
			}
		});
	};

	submit = (e) => {
		e.preventDefault();
		this.props.addNote(this.state.note);
		this.setState({
			note: {
				note: '',
				id: '',
				parent: ''
			}
		});
	};
	render() {
		const style = `${this.props.color} waves-effect waves-light btn`;
		return (
			<div className="row">
				<form className="col s12" onSubmit={this.submit}>
					<div className="input-field col s10">
						<input
							placeholder="Add a note"
							id="add_board"
							type="text"
							className="validate"
							value={this.state.note.note}
							onChange={this.noteChange}
						/>
					</div>
					<div className="input-field col s2">
						<button className={style}>+</button>
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToPropos = (dispatch) => {
	return {
		addNote: (note) => dispatch(addNote(note))
	};
};
export default connect(null, mapStateToPropos)(NoteForm);
