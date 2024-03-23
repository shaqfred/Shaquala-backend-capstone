const express = require("express");

const journals = express.Router();

const {
  getAllJournal,
  getOneJournal,
  updateJournal,
  deleteJournal,
} = require("../query/journal.js");

// journals.get("/", (request, response) => {
//   response.status(200).json({ message: "Journalfly Home Page" });
// });- testing the first get request

//alljournal
journals.get("/", async (request, response) => {
  try {
    const allJournals = await getAllJournal();
    response.status(200).json(allJournals);
  } catch (error) {
    response.status(404).json({ message: error });
  }
});
//one journal
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
// updating journal
journals.put("/:id", async (request, response) => {
  const id = request.params.id;
  const body = request.body;
  const updatedJournal = await updateJournal(body, id);

  if (updatedJournal.id) {
    response.status(200).json(updatedJournal);
  } else {
    response.status(404).json(updatedJournal);
  }
});
//delete journal
journals.delete("/:id", async (request, response) => {
  const id = request.params.id;
  if (Number(id)) {
    const deletedJournal = await deleteJournal(id);

    if (deletedJournal.id) {
      response.status(200).json(deletedJournal);
    } else {
      response.status(500).json(deletedJournal);
    }
  } else {
    response.status(404).json({
      error: "id must be numeric",
    });
  }
});

module.exports = journals;
