const express = require("express");

const journals = express.Router();

const { getAllJournal, getOneJournal } = require("../query/journal.js");

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
journals.get("/:id", async (request, response) => {
  const id = request.params.id;

  console.log(Number(id));
  if (Number(id)) {
    const oneJournal = await getOneJournal(id);
    response.status(200).json(oneJournal);
  } else {
    response.status(404).json({
      error: "id must be numeric value",
    });
  }
});

module.exports = journals;
