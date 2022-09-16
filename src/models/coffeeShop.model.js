const mongoose = require("mongoose");
const {Schema, model, Types} = mongoose;


const coffeeShopSchema = new Schema(
    {
        name: String,
        location: [Number, Number],
        address: String,
        userId: {
            ref: 'User',
            type: Types.ObjectId
        },
        workingHour: [
            {
                shift: Number,
                start: Number,
                end: Number
            }
        ],
        region: {
            type: Number,
        },
        description: String,
        menus: [{
            title: String,
            name: String,
            items: [{
                title: String,
                price: Number,
                desc: String,
                images: {
                    small: String,
                    medium: String,
                    large: String
                },
                options: [String],
            }],
        }],
        facilities: [Types.ObjectId],
        comments: []

    },
);


module.exports = model("CoffeeShop", coffeeShopSchema);