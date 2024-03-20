const express = require("express");

const journals = express.Router();

const { getAllJournal } = require("../query/journal.js");

// journals.get("/", (request, response) => {
//   response.status(200).json({ message: "Journalfly Home Page" });
// });

journals.get("/", async (request, response) => {
  try {
    const allJournals = await getAllJournal();
    response.status(200).json(allJournals);
  } catch (error) {
    response.status(404).json({ message: error });
  }
});

module.exports = journals;
