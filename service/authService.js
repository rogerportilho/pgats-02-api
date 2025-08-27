const { users } = require('../model/db');

exports.register = (req, res) => {
  const { username, password, favorecido } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Usuário e senha são obrigatórios.' });
  }
  if (users.find(u => u.username === username)) {
    return res.status(409).json({ error: 'Usuário já existe.' });
  }
  users.push({ username, password, favorecido: !!favorecido, saldo: 10000 });
  res.status(201).json({ message: 'Usuário registrado com sucesso.' });
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Usuário e senha são obrigatórios.' });
  }
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) {
    return res.status(401).json({ error: 'Credenciais inválidas.' });
  }
  res.json({ error: 'Login realizado com sucesso.' });
};
