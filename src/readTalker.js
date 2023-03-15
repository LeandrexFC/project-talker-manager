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

  try {
    // const readDb = await readTalkerManager();
    // readDb.push(talker);

    return await fs.writeFile(join(__dirname, path), JSON
    .stringify(talker));
  } catch (error) {
    const err = new Error('Error writting file');
    err.statusCode = 500;
    throw err;
  }
};

module.exports = {
  readTalkerManager,
  writeTalkerManager,
};