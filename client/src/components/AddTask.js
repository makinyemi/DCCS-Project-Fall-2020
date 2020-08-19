import React, { Component } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import { url } from "../utils/axiosConfig";

export class AddTask extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			description: "",
			date: new Date()
		};

		this.onChangeName = this.onChangeName.bind(this);
		this.onChangeDescription = this.onChangeDescription.bind(this);
		this.onChangeDate = this.onChangeDate.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChangeName(e) {
		this.setState({
			name: e.target.value
		});
	}
	onChangeDescription(e) {
		this.setState({
			description: e.target.value
		});
	}
	onChangeDate(date) {
		this.setState({
			date: date
		});
	}

	onSubmit(e) {
		e.preventDefault();

		const task = {
			name: this.state.name,
			description: this.state.description,
			date: this.state.date
		};

		console.log(task);

		axios.post(String(url) + "add", task).then((res) => console.log(res.data));

		window.location = "/";
	}

	render() {
		return (
			<div>
				<h3>Add New Task</h3>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Name: </label>
						<input
							type="text"
							required
							className="form-control"
							value={this.state.name}
							onChange={this.onChangeName}
						/>
					</div>
					<div className="form-group">
						<label>Task Description: </label>
						<input
							type="text"
							required
							className="form-control"
							value={this.state.description}
							onChange={this.onChangeDescription}
						/>
					</div>
					<div className="form-group">
						<label>Date to Complete: </label>
						<div>
							<DatePicker
								selected={this.state.date}
								onChange={this.onChangeDate}
							/>
						</div>
					</div>
					<div className="form-group">
						<input type="submit" value="Add Task" className="btn btn-primary" />
					</div>
				</form>
			</div>
		);
	}
}

export default AddTask;
