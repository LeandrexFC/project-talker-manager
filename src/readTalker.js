const fs = require('fs').promises;
const { join } = require('path');

const readTalkerManager = async () => {
  const path = '/talker.json';
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const getAllTalker = async () => {
  const talkerManage = await readTalkerManager();
  return talkerManage;
};

module.exports = {
  getAllTalker,
};