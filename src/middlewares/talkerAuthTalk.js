const talkerAuthWatch = (req, res, next) => {
  const { talk } = req.body;
  const { watchedAt } = talk;
  const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
  switch (true) {
    case !watchedAt:
      return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
    case !dateRegex.test(watchedAt):
      return res.status(400)
      .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
    default:
      return next();
  }
};

module.exports = talkerAuthWatch;