const db = require("../db/dbConfig");

const getAllJournal = async () => {
  try {
    const allJournal = await db.any("SELECT * FROM journal");
    return allJournal;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllJournal };
