import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';

import { addLane } from '../redux/actions/actionsCreator';

class AddBoard extends Component {
	constructor() {
		super();
		this.state = {
			lane: {
				name: '',
				id: ''
			}
		};
	}

	laneChange = (e) => {
		this.setState({
			lane: {
				name: e.target.value,
				id: uuid()
			}
		});
	};

	submit = (e) => {
		e.preventDefault();

		this.props.addLane(this.state.lane);
		this.setState({
			lane: {
				name: '',
				id: ''
			}
		});
		console.log(this.state);
	};

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col s12">
						<form onSubmit={this.submit}>
							<div className="input-field col s11">
								<input
									placeholder="Add Board"
									id="add_board"
									type="text"
									className="validate"
									value={this.state.lane.name}
									onChange={this.laneChange}
								/>
							</div>
							<div className="input-field col s1">
								<button className="waves-effect waves-light btn blue">Add</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addLane: (name) => dispatch(addLane(name))
	};
};
export default connect(null, mapDispatchToProps)(AddBoard);
