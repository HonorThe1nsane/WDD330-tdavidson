window.onload = function getDate() {
    let displayDate = document.getElementById("date");
    displayDate.innerText = new Date().toLocaleDateString();
}

// ============== Model =========================
const journalEntry = [{
    'fname': 'Troy',
    'lname': 'Davidson',
    'date': displayDate,
    'chapter': '',
    'verse': '',
    'verseText': ''

}]

class JournalModel {
    getAllEntries() {
        return JournalList;
    }

    getSingleJournal(chapter) {
        return journalList.find(entry => entry.chapter === chapter);
    }
}

export default JournalModel;