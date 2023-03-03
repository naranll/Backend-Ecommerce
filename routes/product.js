import express, { response } from "express";
import bodyParser from "body-parser";
import { getBrands } from "../services/category-service.js";
import { createProduct } from "../services/product-service.js";
import fs from 'fs';

const products = JSON.parse(fs.readFileSync('./data/product.json'));

const Router = express.Router();
let myProducts = [];

Router.get("/products", (req, res) => {
    console.log("products request");
    res.send("asd");
});

// Router.post("/products", (req, res) => {
//     myProducts.push(req.body);
//     console.log("myProducts", myProducts);
//     res.send(myProducts);
// })

Router.get("/categories", async (req, res) => {
    const result = await getBrands();
    res.status(200).send(result);
})

Router.get("/addDummy", async (req, res) => {
    products.map(prod => {
        let newProdStr = '';
        newProdStr += prod.name + ', ' + prod.brand + ', ' + prod.category + ', ' + prod.description + ', ' + prod.sale + ', ' + prod.price + ', ' + prod.stock + ', ' + prod.image;
        // createProduct(newProdStr);
        console.log(newProdStr);
    })
    res.status(200).send(products);
})

export default Router;