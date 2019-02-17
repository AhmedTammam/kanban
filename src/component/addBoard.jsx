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
				id: '',
				color: ''
			}
		};
	}

	laneChange = (e) => {
		this.setState({
			lane: {
				...this.state.lane,
				name: e.target.value,
				id: uuid()
			}
		});
	};

	colorChange = (e) => {
		this.setState({
			lane: {
				...this.state.lane,
				color: e.target.value
			}
		});

		console.log(e.target.value);
	};

	submit = (e) => {
		e.preventDefault();

		this.props.addLane(this.state.lane);
		this.setState({
			lane: {
				name: '',
				id: '',
				color: 'choose'
			}
		});
		console.log(this.state);
	};

	render() {
		return (
			<div className="z-depth-1">
				<div className="container">
					<div className="row">
						<div className="col s12">
							<form onSubmit={this.submit}>
								<div className="input-field col s9">
									<input
										placeholder="Add Board"
										id="add_board"
										type="text"
										className="validate"
										value={this.state.lane.name}
										onChange={this.laneChange}
									/>
								</div>
								<div className="input-field col s2">
									<select onChange={this.colorChange}>
										<option value="choose">Choose Color</option>
										<option value="red">red</option>
										<option value="blue">blue</option>
										<option value="green">green</option>
										<option value="orange">orange</option>
									</select>
								</div>
								<div className="input-field col s1">
									<button className="waves-effect waves-light btn blue-grey ">Add</button>
								</div>
							</form>
						</div>
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
