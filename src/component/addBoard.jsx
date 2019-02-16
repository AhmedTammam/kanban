import React, { Component } from 'react';

export default class AddBoard extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col s12">
						<div className="input-field col s11">
							<input placeholder="Add Board" id="add_board" type="text" className="validate" />
						</div>
						<div className="input-field col s1">
							<button className="waves-effect waves-light btn blue">Add</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
