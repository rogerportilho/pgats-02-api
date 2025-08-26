const { users } = require('../model/db');

exports.register = (req, res) => {
  const { username, password, favorecido } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Usuário e senha são obrigatórios.' });
  }
  if (users.find(u => u.username === username)) {
    return res.status(409).json({ message: 'Usuário já existe.' });
  }
  users.push({ username, password, favorecido: !!favorecido, saldo: 10000 });
  res.status(201).json({ message: 'Usuário registrado com sucesso.' });
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Usuário e senha são obrigatórios.' });
  }
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Credenciais inválidas.' });
  }
  res.json({ message: 'Login realizado com sucesso.' });
};
