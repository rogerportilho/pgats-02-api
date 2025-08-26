const { users } = require('../model/db');

exports.getAllUsers = (req, res) => {
  const list = users.map(u => ({ username: u.username, favorecido: u.favorecido, saldo: u.saldo }));
  res.json(list);
};
