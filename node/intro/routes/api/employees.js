const express = require("express");
const {
  getAllEmployees,
  createEmployee,
  updateEmployee,
  getSpecificEmployee,
  deleteEmployee,
} = require("../../controller/employeeController");
const router = express.Router();
const data = {};
data.employees = require("../../model/employees.json");
router
  .route("/")
  .get(getAllEmployees)
  .post(createEmployee)
  .put(updateEmployee)
  .delete(deleteEmployee);

router.route("/:id").get(getSpecificEmployee);

module.exports = router;
