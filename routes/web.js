import { home } from "../controllers/proController.js";
import { product, dogsSection, buyDogs } from "../controllers/proController.js";


import express from "express";
const web = express.Router();

// basic routing for products
web.get('', home);
web.get('/product/:id', product);
web.get('/dog', dogsSection);
web.get('/dog/:id', buyDogs);

export default web;
