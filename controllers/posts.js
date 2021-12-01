const mysql = require("mysql2");
const pool = require("../sql/connection");

const list = (req, res) => {
  let sql = `SELECT * FROM ??`;
  sql = mysql.format(sql, ["myposts"]);
  pool.query(sql, (err, rows) => {
    if (err) {
      console.error(err);
      return res.status(500).send("ya goofed!");
    }
    res.json(rows);
  });
};

const show = (req, res) => {
  const { id } = req.params;
  let sql = `SELECT * FROM ?? WHERE ?? = ?;`;
  let replacements = ["myposts", "idnew_table", id];
  sql = mysql.format(sql, replacements);
  pool.query(sql, (err, row) => {
    if (err) {
      console.error(err);
      return res.status(500).send("ya goofed!");
    }
    res.json(row);
  });
}


const create = (req, res) => {
  const { idnew_table, new_title, new_body } = req.body;

  let sql = `INSERT INTO ?? VALUES (?,?,?);`;
  let replacements = ["myposts", null, new_title, new_body];
  sql = mysql.format(sql, replacements);
  pool.query(sql, (err, row) => {
    if (err) {
      console.error(err);
      return res.status(500).send("ya goofed!");
    }
    res.json(row);
  });
}

const update = (req, res) => {
  const { id } = req.params;
  const { body } = req;

  let sql = `UPDATE ?? SET ? WHERE idnew_table = ?;`;
  sql = mysql.format(sql, ["myposts", body, id]);

  pool.query(sql, (err, row) => {
    if (err) {
      console.error(err);
      return res.status(500).send("ya goofed!");
    }
    res.json(row.message);
  });
}

const remove = (req, res) => {
  const { id } = req.params;

  let sql = `DELETE FROM ?? WHERE ?? = ?;`;
  sql = mysql.format(sql, ["myposts", "idnew_table", id]);

  pool.query(sql, (err, row) => {
    if (err) {
      console.error(err);
      return res.status(500).send("ya goofed!");
    }
    res.json(row.affectedRows);
  });
}


module.exports = { list , show, create, update, remove};
