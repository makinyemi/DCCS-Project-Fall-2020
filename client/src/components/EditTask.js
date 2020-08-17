import React, { Component } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

export class EditTask extends Component {
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

	componentDidMount() {
		axios
			.get("http://localhost:5000/task/" + this.props.match.params.id)
			.then((response) => {
				console.log(this.props.match.params.id);
				this.setState({
					name: response.data.name,
					description: response.data.description,
					date: new Date(response.data.date)
				});
			})
			.catch((err) => {
				console.log(err);
			});
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

		axios
			.post(
				"http://localhost:5000/task/update/" + this.props.match.params.id,
				task
			)
			.then((res) => console.log(res.data));

		window.location = "/";
	}

	render() {
		return (
			<div>
				<h3>Edit Task</h3>
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
						<input
							type="submit"
							value="Edit Task"
							className="btn btn-primary"
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default EditTask;
