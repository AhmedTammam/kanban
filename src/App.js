import React, { Component } from 'react';
import Header from './component/header';
import AddBoard from './component/addBoard';
import Boards from './component/Borad/Boards';
import './App.css';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<AddBoard />
				<Boards />
			</div>
		);
	}
}

export default App;
