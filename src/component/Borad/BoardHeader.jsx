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
		const btnStyle = `${this.props.color
			? this.props.color
			: 'blue'} waves-effect waves-light btn right-align lighten-2`;
		return (
			<div className={style} style={{ height: 60 }}>
				<div className="left-align col s6">
					{this.state.edit ? (
						<input className="white" value={this.props.name} onChange={this.nameChange} />
					) : (
						<span className="card-title left-align">{this.props.name}</span>
					)}
				</div>
				<div className="right-align col s6">
					<a className={btnStyle} onClick={this.edit}>
						{this.state.edit ? 'done' : 'edit'}
					</a>
					<a className={btnStyle} onClick={this.edit}>
						x
					</a>
				</div>
			</div>
		);
	}
}
