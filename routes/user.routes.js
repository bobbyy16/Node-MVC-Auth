const express = require("express");
const {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  updateUserPartial,
  deleteUser,
} = require("../controllers/user.controllers.js");

const router = express.Router();

router.post("/", createUser);
router.get("/", getAllUsers);
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.patch("/:id", updateUserPartial);
router.delete("/:id", deleteUser);

module.exports = router;
