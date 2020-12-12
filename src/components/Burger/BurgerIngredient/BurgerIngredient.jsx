import React, { Component } from 'react';
import styles from './BurgerIngredient.module.scss';
import './BurgerIngredient.module.scss';
// import PropTypes from 'prop-types';
import salad from './salad.jpg';
import top from './burger_top.jpeg';
import bottom from './burger_bottom.jpeg';
import meat from './meat.png';
import cheese from './cheeses.jpg';

class BurgerIngredient extends Component {
	render() {
		let ingredient = null;

		switch (this.props.type) {
			case 'bread-bottom':
				// ingredient = <div className={styles.BreadBottom} />;
				ingredient = (
					<div className={styles.ImgSalad}>
						<img src={bottom} className={styles.BurgerBottom} alt="" />
					</div>
				);

				break;
			case 'bread-top':
				// ingredient = (
				// 	<div className={styles.BreadTop}>
				// 		{/*  <div className="BreadTop"> */}
				// 		<div className={styles.Seeds1} />
				// 		{/* <div className="Seeds1" /> */}
				// 		<div className={styles.Seeds2} />
				// 		{/* <div className="Seeds2" /> */}
				// 	</div>
				// );
				ingredient = (
					<div className={styles.ImgSalad}>
						<img src={top} className={styles.BurgerTop} alt="" />
					</div>
				);
				break;
			case 'meat':
				// ingredient = <div className={styles.Meat} />;
				ingredient = (
					<div className={styles.ImgSalad}>
						<img src={meat} className={styles.BurgerTop} alt="" />
					</div>
				);
				break;
			case 'cheese':
				// ingredient = <div className={styles.Cheese} />;
				<div className={styles.ImgSalad}>
					<img src={cheese} className={styles.ImgSalad} alt="" />
				</div>;
				break;
			case 'salad':
				// ingredient = <div className={styles.Salad} />;
				ingredient = (
					<div className={styles.ImgSalad}>
						<img src={salad} className={styles.ImgSalad} alt="" />
					</div>
				);
				break;
			case 'mayo':
				ingredient = <div className={styles.Mayo} />;
				break;
			case 'ketchup':
				ingredient = <div className={styles.Ketchup} />;
				break;
			default:
				ingredient = null;
		}
		return ingredient;
	}
}

// BurgerIngredient.propTypes = {
// 	type: PropTypes.string.isRequired
// };

export default BurgerIngredient;
