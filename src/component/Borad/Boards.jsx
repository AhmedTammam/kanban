import React, { Component } from 'react';
import { connect } from 'react-redux';
import Board from './Board';

class Boards extends Component {
	renderBoards = () => {
		return this.props.boards.map((board) => <Board key={board.id} name={board.name} code={board.id} />);
	};
	render() {
		return (
			<div>
				<div className="row">{this.renderBoards()}</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		boards: state.boards
	};
};
export default connect(mapStateToProps)(Boards);
