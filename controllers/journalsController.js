const express = require("express");

const journalss = express.Router();
const { validateEntry } = require("../middleware/entryContentValidation.js");

const {
  getAllJournal,
  getOneJournal,
  updateJournal,
  deleteJournal,
  createJournal,
} = require("../query/journal.js");

// journalss.get("/", (request, response) => {
//   response.status(200).json({ message: "Journalfly Home Page" });
// });
// testing the first get request

//alljournal
journalss.get("/", async (request, response) => {
  // try {
  //   const allJournals = await getAllJournal();
  //   response.status(200).json(allJournals);
  // } catch (error) {
  //   response.status(404).json({ message: error });
  // }
  const allJournals = await getAllJournal();
  console.log(allJournals);
  response.status(200).json(allJournals);
});
//one journal
journalss.get("/:id", async (request, response) => {
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
journalss.put("/:id", validateEntry, async (request, response) => {
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
journalss.delete("/:id", async (request, response) => {
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

//post a new journal
journalss.post("/", validateEntry, async (request, response) => {
  const body = request.body;
  const newJournal = await createJournal(body);
  console.log(body);
  if (newJournal.id) {
    response.status(200).json(newJournal);
  } else {
    response.status(500).json(newJournal);
  }
});

module.exports = journalss;
