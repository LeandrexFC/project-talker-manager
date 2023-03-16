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
  const results = talker;
  const readDb = await readTalkerManager();
  const lengthDb = readDb.length;
    results.id = lengthDb + 1;
    console.log(results);
     await fs.writeFile(join(__dirname, path), JSON
    .stringify([results]));
};

module.exports = {
  readTalkerManager,
  writeTalkerManager,
};