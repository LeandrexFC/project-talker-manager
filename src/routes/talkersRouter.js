const { Router } = require('express');
const { readTalkerManager, writeTalkerManager } = require('../readTalker');
const tokenGenerate = require('../generateToken');
const loginAuth = require('../middlewares/loginAuth');
const tokenAuth = require('../middlewares/tokenAuth');
const talkerAuthName = require('../middlewares/talkerAuthName');
const talkerAuthAge = require('../middlewares/talkerAuthAge');
const talkerAuthTalk = require('../middlewares/talkerAuthTalk');
const talkerAuthWatch = require('../middlewares/talkerAuthTalk');
const talkerAuthRate = require('../middlewares/talkerAuthRate');
const talkk = require('../middlewares/talkMiddlware');
const db = require('../talker.json');

const talkerManagerRouter = Router();

talkerManagerRouter.get('/talker', async (req, res) => {
  const talkerManager = await readTalkerManager();
  if (talkerManager.length === 0) {
    return res.status(200).json([]);
  }
  return res.status(200).json(talkerManager);
});

talkerManagerRouter.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const talkerManager = await readTalkerManager();
  const talker = talkerManager.filter((talkers) => talkers.id === +id);
  if (talker.length === 0) {
    return res.status(404).json({
      message: 'Pessoa palestrante não encontrada',
    });
  }
  return res.status(200).json(talker[0]);
});

talkerManagerRouter.post('/', loginAuth, async (req, res) => {
  const token = tokenGenerate();
  return res.status(200).header('Authorization', token).json({ token });
});

talkerManagerRouter.post('/talker', tokenAuth, talkerAuthName, 
talkerAuthAge, talkk, talkerAuthTalk, talkerAuthWatch, talkerAuthRate, async (req, res) => {
  const newContent = req.body;
  const { id } = db[4];
  newContent.id = id + 1;
  await writeTalkerManager([newContent]);
  return res.status(201).json(newContent);
});

module.exports = talkerManagerRouter;