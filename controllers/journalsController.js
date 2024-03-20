const express = require("express");

const journals = express.Router();

const { getAllJournal } = require("../query/journal.js");

journals.get("/", (request, response) => {
  response.status(200).json({ message: "Journalfly Home Page" });
});

module.exports = journals;
