import User from '../model/user.schema.js';
import bcryptjs from"bcryptjs";
// import Blacklist from "../model/blacklist.schema.js";
import jwt from 'jsonwebtoken';



export const signup = async (req, res) => {
    try {
        const { fullname, email, password, role } = req.body;

        // Check if the user already exists
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password
        const hashPassword = await bcryptjs.hash(password, 10);

        // Create the user
        const createdUser = new User({
            fullname,
            email,
            password: hashPassword,
            role,
        });
        await createdUser.save();

        // Generate JWT token
        const token = jwt.sign(
            { id: createdUser._id, role: createdUser.role },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        // Respond with token and user details
        res.status(201).json({
            message: "User created successfully",
            token, // Include token in the response
            user: {
                _id: createdUser._id,
                fullname: createdUser.fullname,
                email: createdUser.email,
                role: createdUser.role,
            },
        });
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


// import User from '../model/user.schema.js';
// import bcryptjs from "bcryptjs";

// Updated login controller
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        // Compare password
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        // Respond with user details and token
        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};



// export const logout = async (req, res) => {
//     try {
//         const authHeader = req.headers.authorization;

//         // Check if authorization header exists
//         if (!authHeader || !authHeader.startsWith("Bearer ")) {
//             return res.status(400).json({ message: "Authorization token is required" });
//         }

//         // Extract the token
//         const token = authHeader.split(" ")[1];

//         // Add the token to the blacklist
//         await Blacklist.create({ token });

//         res.status(200).json({ message: "Logged out successfully" });
//     } catch (error) {
//         console.error("Error during logout:", error.message);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// };

