const { users, transfers } = require('../model/db');

exports.transfers = (req, res) => {
  const { from, to, value } = req.body;
  if (!from || !to || typeof value !== 'number') {
    return res.status(400).json({ message: 'Campos obrigatórios: from, to, value.' });
  }
  const sender = users.find(u => u.username === from);
  const recipient = users.find(u => u.username === to);
  if (!sender || !recipient) {
    return res.status(404).json({ message: 'Usuário remetente ou destinatário não encontrado.' });
  }
  if (sender.saldo < value) {
    return res.status(400).json({ message: 'Saldo insuficiente.' });
  }
  if (!recipient.favorecido && value >= 5000) {
    return res.status(403).json({ message: 'Transferências acima de R$ 5.000,00 só são permitidas para favorecidos.' });
  }
  sender.saldo -= value;
  recipient.saldo += value;
  transfers.push({ from, to, value, date: new Date() });
  res.json({ message: 'Transferência realizada com sucesso.' });
};
