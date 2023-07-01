import express from "express";
import environment from "./config/environment.js";
import authRouter from "./routes/auth.routes.js";
import { connect } from "./config/mongo.js";
import userRouter from "./routes/user.routes.js";

const { PORT } = environment;

const server = express();

server.use(express.json());

server.use("/auth", authRouter);
server.use("/users", userRouter);

connect()
	.then(() => {
		server.listen(PORT, () => {
			console.log(`Server is running on ${PORT}`);
		});
	})
	.catch((err) => {
		console.log(err);
	});
