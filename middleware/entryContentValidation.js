function validateEntry(request, response, next) {
  //Check to see the journal entry is empty or contains only whitespace
  const journal_entry = request.body.journal_entry;
  const entry = journal_entry.trim();

  if (!entry) {
    response.status(404).json({
      message: "Entry cannot be empty",
    });
  } else {
    next();
  }
}

module.exports = { validateEntry };
