const { Router } = require('express');
// const talkerManagerDb = require('../talker.json');
const { getAllTalker } = require('../readTalker'); 

const talkerManagerRouter = Router();

talkerManagerRouter.get('/', async (req, res) => {
  const talkerManager = await getAllTalker();
  if (talkerManager.length === 0) {
    return res.status(200).json([]);
  }
  return res.status(200).json(talkerManager);
});

talkerManagerRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const talkerManager = await getAllTalker();
  const talker = talkerManager.filter((talkers) => talkers.id === +id);
  if (talker.length === 0) {
    return res.status(404).json({
      message: 'Pessoa palestrante não encontrada',
    });
  }
  return res.status(200).json(talker[0]);
});

module.exports = talkerManagerRouter;