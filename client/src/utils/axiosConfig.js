import axios from "axios";

const env = process.env.NODE_ENV; // current environment

export const app = axios.create({
	baseURL:
		env === "production"
			? "http://http://ec2-3-89-138-171.compute-1.amazonaws.com/task/" // production
			: "http://localhost:5000/task/" // development
});
