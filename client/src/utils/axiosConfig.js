import ip from "ip";

var env = process.env.NODE_ENV; // current environment
var current_IP = ip.address().replace(/\./g, "-"); //Current ip

export const url =
	env === "production"
		? `http://100.25.211.182:5000/task/` // production
		: "http://localhost:5000/task/"; // development
