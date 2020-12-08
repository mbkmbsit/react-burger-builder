import styles from './Layout.module.scss';
import React, { Component } from 'react';

class Layout extends Component {
	render() {
		return (
			<React.Fragment>
				<div>Toolbar, SideDrawer, Backdrop</div>
				<main className={styles.Content}>{this.props.children}</main>
			</React.Fragment>
		);
	}
}

export default Layout;
