import React, { Component } from 'react';
import { connect } from 'react-redux';

import Note from '../Note';

class BoardBody extends Component {
	notesRender = () => {
		return this.props.notes
			.filter((note) => note.parent === this.props.parent)
			.map((note) => <Note name={note.note} id={note.id} key={note.id} />);
	};
	render() {
		return <div className="card-content">{this.notesRender()}</div>;
	}
}

const mapStateToProps = (state) => {
	return {
		notes: state.notes
	};
};

export default connect(mapStateToProps)(BoardBody);
