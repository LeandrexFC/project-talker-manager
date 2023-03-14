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

module.exports = talkerManagerRouter;