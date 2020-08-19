//Packages required
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const url = require("./utils/utils");

require("dotenv").config();

//Local Files Required
const taskRouter = require("./routes/task");

//Packages used
app.use(express.json());
app.use(cors());

//Local Files used
app.use("/task", taskRouter);

//Port Connection
const port = 5000;

app.listen(port, () => {
	console.log(`Server is now running at ${url}...`);
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
