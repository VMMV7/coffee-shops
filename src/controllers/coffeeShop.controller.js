const CoffeeShop = require("../models/coffeeShop.model.js");
const Facilities = require('../models/facility.model.js');


// coffee shops controllers
const createCoffeeShop = async (req, res) => {
    const result = await CoffeeShop.create(req.body);
    res.send({
        msg: "create a CoffeeShop",
        errors: [],
        data: result,
        status: 201,
    });
};

const getCoffeeShops = async (req, res) => {
    const result = await CoffeeShop.find();
    res.send({
        msg: "showing all CoffeeShops",
        errors: [],
        data: result,
        status: 200,
    });
};

// facilities controller

const createFacility = async (req, res) => {
    const result = await Facilities.create(req.body);
    res.send({
        msg: "create a Facility",
        errors: [],
        data: result,
        status: 201,
    });
};

const getFacilities = async (req, res) => {
    const result = await Facilities.find();
    res.send({
        msg: "create a Facility",
        errors: [],
        data: result,
        status: 201,
    });
};

module.exports = {
    createCoffeeShop,
    getCoffeeShops,
    createFacility,
    getFacilities
};