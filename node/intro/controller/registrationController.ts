const bcrypt = require("bcrypt");
const fsPromises = require("fs").promises;
const path = require("path");

const usersDB = {
  users: require("../model/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};

const handleNewUser = async (req, res) => {
  const { user, pwd } = req.body;
  if (!user || !pwd)
    return res
      .status(400)
      .json({ message: "username and password is required" });

  //   check for duplicate
  const duplicate = usersDB.users.find((person) => person.username === user);
  if (duplicate)
    return res.status(409).send({ message: "This username is taken" }); // conflict

  try {
    // encrypt the password
    const hashedPwd = await bcrypt.hash(pwd, 10);

    // store the new user
    const newUser = { username: user, password: hashedPwd };
    usersDB.setUsers([...usersDB.users, newUser]);
    // write info to json file
    await fsPromises.writeFile(
      path.join(__dirname, "..", "model", "users.json"),
      JSON.stringify(usersDB.users)
    );
    res.status(201).json({ success: `New user ${user} created!` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { handleNewUser };
