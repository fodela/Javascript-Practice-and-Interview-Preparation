// interface userType {
//   username: string;
//   password: string;
// }
// interface usersDBType {
//   users: userType[];
//   setUsers: (data: userType[]) => void;
// }
const bcrypt = require("bcrypt");
const usersDB = {
  users: require("../model/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};

const handleLogin = async (req, res) => {
  const { user, pwd } = req.body;
  if (!user || !pwd) {
    return res
      .status(400)
      .send({ message: "Username and password is required" });
  }
  const foundUser = usersDB.users.find(
    (person) => person.username.toLowerCase() === user.toLowerCase()
  );

  if (!foundUser)
    return res.status(401).send({ message: "wrong username or password" });

  const passwordMatch = await bcrypt.compare(pwd, foundUser.password);

  if (passwordMatch) {
    // [ ]create jwt
    res.json({ success: `User ${user} is logged in!` });
  } else {
    res.status(401).send({ message: "Invalid username or password " });
  }
};

module.exports = { handleLogin };
