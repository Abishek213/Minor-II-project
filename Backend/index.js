import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
// require('dotenv').config();

import jwt from"jsonwebtoken";

// import User from "./model/user.schema.js";
import userRoute from"./route/user.route.js";

dotenv.config();


const app = express();
app.use(express.json());
app.use(cors());

const JWT_SECRET = process.env.JWT_SECRET;
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true, // Fixed typo here
    });
    console.log("Connected to MongoDB");

    // Test data to trigger database creation
    // const testUser = new User({
    //     fullname: "Test User",
    //     email: "test@example.com",
    //     password: "password123",
    //     role: "User"
    // });

    // testUser.save()
    //     .then(() => console.log("Test user created"))
    //     .catch((error) => console.log("Error creating test user:", error));
} catch (error) {
    console.log("Error:", error.stack);
}
app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
