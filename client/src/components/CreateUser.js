import React, { Component } from "react";

export class CreateUser extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: ""
		};

		this.onSubmit = this.onSubmit.bind(this);
	}

	onChangeUser(e) {
		this.setState({
			user: e.target.value
		});
	}
	onSubmit(e) {
		e.preventDefault();

		const user = {
			user: this.state.user
		};

		console.log(user);

		this.setState({
			user: ""
		});
	}

	render() {
		return (
			<div>
				<h3>Create a User</h3>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>User: </label>
						<input
							type="text"
							required
							className="form-control"
							value={this.state.user}
							onChange={this.onChangeUser}
						/>
					</div>
					<div className="form-group">
						<input
							type="submit"
							value="Create User"
							className="btn btn-primary"
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default CreateUser;
