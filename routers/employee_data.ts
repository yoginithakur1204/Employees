import express from "express";
import {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
} from "../controllers/employee";

const router = express.Router();

router.get("/getallemployees", getAllEmployees);

router.get("/employee/:id", getEmployeeById);

router.post("/createemployee", createEmployee);

export default router;
