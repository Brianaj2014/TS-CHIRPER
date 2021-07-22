
// change everything to import 
import * as express from "express";
import * as path from "path";
import apiRouter from "./routes";

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRouter);
app.use(express.static("public"));
app.use((req, res) => res.sendFile(path.join(__name, "../public/index.html")))

app.listen(3000);