import express from "express";

//API Router
import prodcutRouter from "./routes/api.js";

const app = express();

app.use("/api/products", prodcutRouter);

const PORT = 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));



