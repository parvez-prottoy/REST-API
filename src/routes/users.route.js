import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controllers/users.controller.js";

const router = express.Router();

// api/users : GET
router.get("/", getAllUsers);
// api/users/:id : GET
router.get("/:id", getUserById);
// api/users : POST
router.post("/", createUser);
// api/users/:id : PUT
router.put("/:id", updateUser);
// api/users/:id : DELETE
router.delete("/:id", deleteUser);

export default router;
