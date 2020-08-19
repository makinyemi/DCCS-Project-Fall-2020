import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { url } from "../utils/axiosConfig";

const Task = (props) => (
	<tr>
		<td>{props.task.name}</td>
		<td>{props.task.description}</td>
		<td>{String(props.task.date).substring(0, 10)}</td>
		<td>
			<Link to={"/update/" + props.task._id}>edit</Link> |
			<a
				href="#"
				onClick={() => {
					props.deleteTask(props.task._id);
				}}
			>
				delete
			</a>
		</td>
	</tr>
);

export class TaskList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: []
		};

		this.deleteTask = this.deleteTask.bind(this);
		this.taskList = this.taskList.bind(this);
	}

	componentDidMount() {
		axios
			.get(String(url))
			.then((response) => {
				this.setState({ tasks: Array.from(response.data) });
			})
			.catch((err) => {
				console.log(err);
			});
	}

	deleteTask(id) {
		axios.delete(String(url) + id).then((res) => console.log(res.data));

		this.setState({
			tasks: this.state.tasks.filter((el) => el._id !== id)
		});
	}

	taskList() {
		return this.state.tasks.map((task) => {
			return <Task task={task} deleteTask={this.deleteTask} key={task._id} />;
		});
	}

	render() {
		return (
			<div>
				<h3>Tasks</h3>
				<table className="table">
					<thead className="thead-light">
						<tr>
							<th></th>
							<th></th>
							<th></th>
							<th></th>
							<th></th>
						</tr>
					</thead>
					<tbody>{this.taskList()}</tbody>
				</table>
			</div>
		);
	}
}

export default TaskList;
