const db = require("../db/dbConfig");

const getAllJournal = async () => {
  try {
    const allJournal = await db.any("SELECT * FROM journal");
    return allJournal;
  } catch (error) {
    return error;
  }
};

const getOneJournal = async (id) => {
  try {
    const oneJournal = await db.one("SELECT * FROM journal WHERE id=$1", id);
    return oneJournal;
  } catch (error) {
    return error;
  }
};

const updateJournal = async (body, id) => {
  try {
    const updatedJournal = await db.one(
      "UPDATE journal SET journal_entry=$1, journal_mood=$2, journal_affirmation=$3  WHERE id=$4 RETURNING *",
      [body.journal_entry, body.journal_mood, body.journal_affirmation, id]
    );
    return updatedJournal;
  } catch (error) {
    return error;
  }
};

const deleteJournal = async (id) => {
  try {
    const deletedJournal = await db.one(
      "DELETE FROM journal WHERE id=$1 RETURNING *",
      id
    );
    return deletedJournal;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllJournal, getOneJournal, updateJournal, deleteJournal };
