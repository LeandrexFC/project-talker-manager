const talkk = (req, res, next) => {
  const { talk } = req.body;
  console.log(talk);

  if (!talk) {
    return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
  }

  next();
};

module.exports = talkk;