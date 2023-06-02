import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import Router from "./routes/product.js";

const app = express();
const port = 8000;
app.use(bodyParser.json());
app.use(cors());

//no more req on app
// app.get('/product', (req, res) => {
//     console.log(req.body.data)
// });

//use middleware
app.use(Router);

console.log("testing remote origin")

app.listen(port, () => {
    console.log("listening on port 8000");
});