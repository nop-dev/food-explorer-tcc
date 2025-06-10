import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";

const app = express();

import routes from "./routes/index.js";

const port = 3000;

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', // URL do seu frontend
  credentials: true // Importante para cookies
}));
app.use(cookieParser());
app.use(routes);

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
