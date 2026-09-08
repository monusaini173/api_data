const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "monu_saini_5951@",
  database: "mks_billing",
});

db.connect((err) => {
  if (err) {
    console.log("MySQL connection failed:");
    console.log(err.message);
    return;
  }

  console.log("MySQL Connected Successfully");
});

module.exports = db;
