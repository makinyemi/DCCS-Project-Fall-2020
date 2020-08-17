import React, { Component } from "react";

export class Header extends Component {
	render() {
		return (
			<div>
				<header className="masthead mb-auto">
					<div className="inner">
						<h1 className="masthead-brand">DCCS Task Manager</h1>
						<p className="lead">Welcome to the DCCS Task Manager App.</p>
					</div>
				</header>
			</div>
		);
	}
}

export default Header;
