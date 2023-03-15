const talkerAuthRate = (req, res, next) => {
  const { talk } = req.body;
  const { rate } = talk;
  switch (true) {
      case typeof (rate) === 'undefined':
        return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
      case rate < 1 || rate > 5 || !Number.isInteger(rate):
        return res.status(400)
        .json({ message: 'O campo "rate" deve ser um número inteiro entre 1 e 5' });
    default:
      return next();
  }
};

module.exports = talkerAuthRate;