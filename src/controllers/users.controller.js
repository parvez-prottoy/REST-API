const getAllUsers = async (req, res) => {
  try {
    res.status(200).send("All users");
  } catch (err) {
    res.status(500).send(err);
  }
};
const getUserById = async (req, res) => {
  try {
    res.status(200).send("Get user by id");
  } catch (err) {
    res.status(500).send(err);
  }
};
const createUser = async (req, res) => {
  try {
    res.status(201).send("Create user");
  } catch (err) {
    res.status(500).send(err);
  }
};
const updateUser = async (req, res) => {
  try {
    res.status(200).send("Update user");
  } catch (err) {
    res.status(500).send(err);
  }
};
const deleteUser = async (req, res) => {
  try {
    res.status(200).send("Delete user");
  } catch (err) {
    res.status(500).send(err);
  }
};

export { getAllUsers, getUserById, createUser, updateUser, deleteUser };
