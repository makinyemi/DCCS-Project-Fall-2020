import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
	render() {
		return (
			<nav className="site-header sticky-top py-1">
				<div className="container d-flex flex-column flex-md-row justify-content-between">
					<Link to="/" className="py-2 d-none d-md-inline-block">
						Tasks
					</Link>
					<Link to="/add" className="py-2 d-none d-md-inline-block">
						Add New Task
					</Link>
				</div>
			</nav>

			// <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
			// 	<Link to="/"  className="navbar-brand"></Link>
			// 	<div className="collpse navbar-collapse">
			// 		<ul>
			// 			<li>
			// 				<Link to="/" className="nav-link">
			// 					Tasks
			// 				</Link>
			// 			</li>
			// 			<li>
			// 				<Link to="/add" className="nav-link">
			// 					Add New Task
			// 				</Link>
			// 			</li>
			// 		</ul>
			// 	</div>
			// </nav>
		);
	}
}

export default Navbar;
