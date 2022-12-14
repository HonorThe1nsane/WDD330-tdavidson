
import JournalModel from './journal-model.js';
class JournalView {
    constructor(type) {
        this.type = type;
        this.model = new JournalModel(this.type);
        // this.controller = new JournalController(this.type);


        // commentsView
        this.entryUI = `
        <h2>Add a Journal Entry</h2>
    <div class="addEntry">
    <label for="fname">First Name:</label><br>
    <input type="text" id="fname" placeholder="your first name"></input><br>
    <label for="lname">Last Name:</label><br>
    <input type="text" id="lname" placeholder="your last name" /><br>
    <label for="book">Book:</label><br>
    <input type="text" id="book" placeholder="enter the book i.e. 1 Nephi" /><br>
    <label for="chapter">Chapter:</label><br>
    <input type="text" id="chapter" placeholder="enter the chapter" /><br>
    <label for="verse">Verses:</label><br>
    <input type="text" id="verse" placeholder="enter the verse(s) number" /><br>
    <label for="notes">Notes/Impressions:</label><br>
    <textarea id="notes" rows="4" cols="50" ></textarea><br>
    <button id="entrySubmit"/>Add journal entry</button>
    </div>
    <h3>Existing Entries</h2>
    <ul class="entries"></ul>`;
    }
    refreshPage() {
        history.go();
    }



    // I only had one function for the view...so I chose not to use an object or class.
    renderEntryList(element, entries) {
        // clear out any comments that might be listed
        element.innerHTML = '';
        // add the new list of comments
        entries.forEach(el => {
            let item = document.createElement('li');
            item.innerHTML = `${el.firstName} ${el.lastName} -- ${el.book} ${el.chapter}: ${el.verse}
        <br>
        ${el.notes}`;
            let deleteButton = document.createElement('button')
            deleteButton.className = 'delete';
            deleteButton.id = 'delete';
            deleteButton.value = el.id
            deleteButton.textContent = 'Delete'
            deleteButton.addEventListener('click', () => {
                console.log(deleteButton.value);
                this.model.removeFromLS(deleteButton.value);
                this.refreshPage();
            })
            element.appendChild(item);
            element.appendChild(deleteButton);
            element.appendChild(document.createElement('br'));
        });
    }
    validateInput() {
        let fname = document.getElementById('fname').value;
        let lname = document.getElementById('lname').value;
        let book = document.getElementById('book').value;
        let chapter = document.getElementById('chapter').value;
        let verse = document.getElementById('verse').value;
        let notes = document.getElementById('notes').value;
        if (fname == '' || lname == '' || book == '' || chapter == '' ||
            verse == '' || notes == '') {
            alert("All fields must be filled out")
            return false;
        }
        return true;

    }

}

export default JournalView;