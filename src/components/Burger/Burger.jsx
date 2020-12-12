import React from 'react';
import styles from './Burger.module.scss';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
	console.log(props.ingredients);
	const transformedIngredients = Object.keys(props.ingredients).map((igKey) => {
		return [ ...Array(props.ingredients[igKey]) ].map((_, i) => <BurgerIngredient key={igKey + i} type={igKey} />);
	});
	console.log('transformedIngredients :>> ', transformedIngredients);
	const ingredients = Object.keys(props.ingredients);
	console.log('Object.keys(props.ingredients) :>> ', ingredients);
	const x = [ ...Array(props.ingredients['cheese']) ];
	console.log('[ ...Array(props.ingredients[igKey]) ] :>> ', x);
	const z = 'fsfsdfsdfsdfsdsdfsdfsdf';
	return (
		<div className={styles.Burger}>
			<BurgerIngredient type="bread-top" />
			{/* {transformedIngredients} */}
			{/* {props.ingredients.map((cheese, i) => {
				return <BurgerIngredient key={i} type="cheese" />;
			})} */}
			{/* {m.map((v, i) => <BurgerIngredient key={i} type={v} />)} */}

			{/* for (i = 0; i < size; i++) {

            } */}
			{ingredients.map((v, index) => {
				let items = [];
				for (let i = 0; i < props.ingredients[v]; i++)
					items.push(<BurgerIngredient key={index + i} type={v} />);
				return items;
			})}

			<BurgerIngredient type="bread-bottom" />
		</div>
	);
};

export default Burger;
