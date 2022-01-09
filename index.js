import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

//user route
import userRoute from "./routes/user.js";
app.use("/", userRoute);
app.all("*", (req, res) => res.send("That route doesn,t exits"));

app.listen(port, () => console.log(`server listen at ${port}`));
