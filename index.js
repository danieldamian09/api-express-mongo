import express from "express";

// console.log(express)

const app = express();

const PORT = 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

