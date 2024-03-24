function validateEntry(journal_entry) {
  //Check to see the journal entry is empty or contains only whitespace
  if (!journal_entry.trim())
    return {
      isValid: false,

      message: "Entry cannot be empty",
    };
}
//set character limits for the journal_entry//

var minChar = 20;
var maxChar = 1200;

if (journal_entry.length < minChar) {
  return {
    isValid: false,

    message: "Entry must be at least " + minChar + " characters long,",
  };
} else if (journal_entry.length > maxChar) {
  return {
    isValid: false,
    message: "Entry can not exceed " + maxChar + " characters.",
  };
}

module.exports = { validateEntry };
