const db = require("../db/dbConfig");

const getAllJournal = async () => {
  try {
    const allJournal = await db.any("SELECT * FROM journal");
    return allJournal;
  } catch (error) {
    return error;
  }
};

const getOneJournal = async (journalID) => {
  try {
    const oneJournal = await db.one(
      "SELECT * FROM journal WHERE id=$1",
      journalID
    );
    return oneJournal;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllJournal, getOneJournal };
