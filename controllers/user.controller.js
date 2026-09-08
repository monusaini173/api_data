const db = require("../config/db");

// POST
const createUser = (req, res) => {
  const { name, age, city, dream } = req.body;

  const sql = "INSERT INTO users (name, age, city,dream) VALUES (?, ?, ?,?)";

  db.query(sql, [name, age, city, dream], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "User save nahi hua",
        error: err.message,
      });
    }

    res.status(201).json({
      message: "User successfully save ho gaya",
      id: result.insertId,
    });
  });
};

// GET
const getUsers = (req, res) => {
  const sql = "SELECT * FROM users";

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Users nahi mil rahe",
        error: err.message,
      });
    }

    res.status(200).json(result);
  });
};

// upadate

const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, age, city, dream } = req.body;

  const sql = `
    UPDATE users
    SET name = ?, age = ?, city = ?, dream = ?
    WHERE id = ?
  `;

  db.query(sql, [name, age, city, dream, id], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "User update nahi hua",
        error: err.message,
      });
    }

    res.json({
      message: "User successfully update ho gaya",
    });
  });
};

// delete

const deleteUser = (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM users WHERE id = ?";

  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "User delete nahi hua",
        error: err.message,
      });
    }

    res.json({
      message: "User successfully delete ho gaya",
    });
  });
};

module.exports = {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
};
