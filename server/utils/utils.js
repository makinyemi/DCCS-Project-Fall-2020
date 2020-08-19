const ip = require("ip");

const env = process.env.NODE_ENV; // current environment
var current_IP = ip.address().replace(/\./g, "-");

const url =
	env === "production"
		? `http://ec2-${current_IP}.compute-1.amazonaws.com:5000/task/` // production
		: "http://localhost:5000/task/"; // development

module.exports = url;
