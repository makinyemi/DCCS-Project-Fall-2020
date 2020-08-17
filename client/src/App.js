import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import UpdateTask from "./components/EditTask";
import Footer from "./components/Footer";

export class App extends Component {
	render() {
		return (
			<Router>
				<Header />
				<div className="container">
					<Navbar />
					<Route path="/" exact component={TaskList} />
					<Route path="/update/:id" exact component={UpdateTask} />
					<Route path="/add" exact component={AddTask} />
				</div>
				<Footer />
			</Router>
		);
	}
}

export default App;
