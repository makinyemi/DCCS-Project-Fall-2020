//Packages required
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

require("dotenv").config();

//Local Files Required
const taskRouter = require("./routes/task");

//Packages used
app.use(express.json());
app.use(cors());

//Local Files used
app.use("/task", taskRouter);

//Port connection
const port = 5000;
const ip = "34-229-235-62";
const url =
	process.env.NODE_ENV === "development"
		? `http://localhost:${port}/`
		: `http://ec2-${ip}.compute-1.amazonaws.com`;

app.listen(port, () => {
	console.log(`Server is now running at http://localhost:${port}...`);
});

//MongoDB Connection

const uri = process.env.ATLAS_URI;

mongoose
	.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true
	})
	.then(() => {
		console.log("MongoDB has successfully connected...");
	})
	.catch((err) => console.error(err));

// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log("MongoDB Connected...")
// })
