import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
	state = {
		ingredients: {
			salad: 1,
			mayo: 10,
			ketchup: 3,
			cheese: 2,
			meat: 2
		}
	};
	render() {
		return (
			<React.Fragment>
				<div>Burger</div>
				{/* <burger /> */}
				<Burger ingredients={this.state.ingredients} />

				<div>Build Controls</div>
			</React.Fragment>
		);
	}
}

export default BurgerBuilder;
