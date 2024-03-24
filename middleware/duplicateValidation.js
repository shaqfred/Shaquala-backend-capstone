var journal_entries = [];

// function to check for duplicate entries//

function isDuplicateEntry(journal_entry) {
  //iterate through existing journal_entries and to check for duplicates//

  for (var i = 0 < journal_entries.length; i++; )
    if (journal_entries[i] === journal_entry) {
      return true;
      //that means there was a duplicate found//
    }
}
return false;
// if (isDuplicateEntry(userEntry)) {
// //   console.error("Duplicate entry was found.Please enter a unique entry. ");
// // } else {
//   console.log("Entry is unique. Proceeding to add to journal_entries");
//   //next add the entry to the journal_entries array//
// }
// journal_entries.push(userEntry);
