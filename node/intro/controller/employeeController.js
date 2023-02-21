const getAllEmployees = (req, res) => {
  console.log(data.employees);
  res.json(data.employees);
};

const createEmployee = (req, res) => {
  res.json({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  });
};

const updateEmployee = (req, res) => {
  res.json({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  });
};

const deleteEmployee = (req, res) => {
  res.json({ id: req.body.id });
};

const getSpecificEmployee = (req, res) => {
  res.json({ id: req.params.id });
};

module.exports = {
  getAllEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getSpecificEmployee,
};
