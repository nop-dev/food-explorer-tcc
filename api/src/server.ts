import express from "express";
import cookieParser from "cookie-parser";
const app = express();

import routes from "./routes/index.js";

const port = 3000;

app.use(express.json());
app.use(cookieParser());
app.use(routes);

app.listen(port, () => {
	console.log(`App rodando na porta ${port}`);
});
