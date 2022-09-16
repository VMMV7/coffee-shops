const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema(
    {
        fullName: String,
        userName: String,
        email: String,
        password: {
            private: true,
            type: String,
            required: true,
            minLength: 6
        },
    },
    {
        timestamps: { createdAt: true, updatedAt: false },
        toJSON: {
            transform(doc, ret) {
                delete ret.password;
                delete ret.__v;
            },
        },
    }
);


module.exports = model("User", userSchema);
