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

const writeTalkerManager = async (talker) => {
  const path = '/talker.json';
     await fs.writeFile(join(__dirname, path), JSON
    .stringify([talker]));
};

module.exports = {
  readTalkerManager,
  writeTalkerManager,
};