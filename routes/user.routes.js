const express = require("express");
const {
  createUser,
  loginUser,
  getAllUsers,
  getUser,
  updateUser,
  updateUserPartial,
  deleteUser,
} = require("../controllers/user.controllers");
const { verifyToken } = require("../middleware/auth.js");
const { check } = require("express-validator");

const router = express.Router();

// Validators for user creation
const createUserValidator = [
  check("email").isEmail().withMessage("Invalid email"),
  check("name").notEmpty().withMessage("Name is required"),
  check("age").isInt({ min: 1 }).withMessage("Age must be a positive number"),
  check("city").notEmpty().withMessage("City is required"),
  check("zipCode").notEmpty().withMessage("Zip code is required"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

router.post("/register", createUserValidator, createUser); // Endpoint to register a new user
router.post("/login", loginUser); // Endpoint to log in a user and receive JWT token

// Protected routes (require JWT authentication)
router.get("/", verifyToken, getAllUsers); // Get all users (requires authentication)
router.get("/:userId", verifyToken, getUser); // Get user by ID (requires authentication)
router.put("/:userId", verifyToken, updateUser); // Update user by ID (requires authentication)
router.patch("/:userId", verifyToken, updateUserPartial); // Partially update user by ID (requires authentication)
router.delete("/:userId", verifyToken, deleteUser); // Delete user by ID (requires authentication)

module.exports = router;
