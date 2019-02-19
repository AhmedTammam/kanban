import React, { Component } from 'react';

export default class BoardHeader extends Component {
	constructor() {
		super();
		this.state = {
			edit: false
		};
	}

	edit = () => {
		this.setState(({ edit }) => ({ edit: !edit }));
	};
	nameChange = (e) => {
		console.log(e.target.value);
	};

	render() {
		const style = `${this.props.color ? this.props.color : 'blue'} white-text card-header`;
		return (
			<div className={style}>
				{this.state.edit ? (
					<input className="white" value={this.props.name} onChange={this.nameChange} />
				) : (
					<span className="card-title left-align">{this.props.name}</span>
				)}
				<a className="waves-effect waves-light btn right-align" onClick={this.edit}>
					{this.state.edit ? 'done' : 'edit'}
				</a>
			</div>
		);
	}
}
