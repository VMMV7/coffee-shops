const express = require("express");
const router = express.Router();
const coffeeShopController = require("../controllers/coffeeShop.controller.js");
router.get("/", coffeeShopController.getCoffeeShops);
router.post("/", coffeeShopController.createCoffeeShop);
router.get("/facilities", coffeeShopController.getFacilities);
router.post("/facilities", coffeeShopController.createFacility);
module.exports = router;
