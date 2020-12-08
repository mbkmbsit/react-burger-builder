// import logo from './logo.svg';
import logo from './mbk_logo.png';
import './App.scss';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import React, { Component } from 'react';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<img src={logo} className="App-logo" alt="logo" />

				<Layout>
					<BurgerBuilder />
				</Layout>
			</div>
		);
	}
}

export default App;
