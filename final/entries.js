class JournalModel {
    constructor(type) {
        this.type = type;
        this.entries = readFromLS(this.type) || [];
    }


    getEntries() {

        return this.entries.filter(el => el.date);

    }

    addEntry(fname, lname, book, chapter, verse, notes) {
        const newEntry = {
            firstName: fname,
            lastName: lname,
            book: book,
            chapter: chapter,
            verse: verse,

            notes: notes,
            date: new Date()
        };
        this.entries.push(newEntry);
        writeToLS(this.type, this.entries);
    }
}

function writeToLS(key, data) {
    // we can use JSON.stringify to convert our object to a string that can be stored in localStorage.
    window.localStorage.setItem(key, JSON.stringify(data));
}

function readFromLS(key) {
    // the string we retrieve from localStorage needs to be converted back to an object with JSON.parse
    return JSON.parse(window.localStorage.getItem(key));
}

// commentsView
const entryUI = `
    <div class="addEntry">
    <h2>Add a Journal Entry</h2>
    <label for="fname">First Name:</label><br>
    <input type="text" id="fname" placeholder="your first name"/><br>
    <label for="lname">Last Name:</label><br>
    <input type="text" id="lname" placeholder="your last name"/><br>
    <label for="book">Book:</label><br>
    <input type="text" id="book" placeholder="enter the book i.e. 1 Nephi"/><br>
    <label for="chapter">Chapter:</label><br>
    <input type="text" id="chapter" placeholder="enter the chapter"/><br>
    <label for="verse">Verses:</label><br>
    <input type="text" id="verse" placeholder="enter the verse(s) number"/><br>
    <label for="notes">Notes/Impressions:</label><br>
    <textarea id="notes" rows="4" cols="50"></textarea><br>
    <button id="entrySubmit"/>Add journal entry</button>
    </div>
    <h2>Existing Entries</h2>
    <ul class="entries"></ul>`;
// I only had one function for the view...so I chose not to use an object or class.
function renderEntryList(element, entries) {
    // clear out any comments that might be listed
    element.innerHTML = '';
    // add the new list of comments
    entries.forEach(el => {
        let item = document.createElement('li');
        item.innerHTML = `
        ${el.firstName} ${el.lastName} -- ${el.book} ${el.chapter}: ${el.verse}
        <br>
        ${el.notes}
        `;
        element.appendChild(item);
    });
}


// Comments controller
export class JournalController {
    constructor(type, commentElementId) {
        this.type = type;
        this.commentElementId = commentElementId;
        this.model = new JournalModel(this.type);
    }


    addSubmitListener(postDate) {
        document.getElementById('entrySubmit').onclick = () => {
            // debugger;
            this.model.addEntry(
                document.getElementById('fname').value,
                document.getElementById('lname').value,
                document.getElementById('book').value,
                document.getElementById('chapter').value,
                document.getElementById('verse').value,
                document.getElementById('notes').value
            );
            document.getElementById('fname').value = '';
            document.getElementById('lname').value = '';
            document.getElementById('book').value = '';
            document.getElementById('chapter').value = '';
            document.getElementById('verse').value = '';
            document.getElementById('notes').value = '';
            this.showJournalList(postDate);
        };
    }
    showJournalList(q = null) {
        q = new Date();
        console.log(q);
        try {
            const parent = document.getElementById(this.commentElementId);
            if (!parent) throw new Error('comment parent not found');
            // check to see if the entryUI code has been added yet
            if (parent.innerHTML === '') {
                parent.innerHTML = entryUI;
            }
            if (q !== null) {
                // looking at one post, show comments and new comment button
                document.querySelector('.addEntry').style.display = 'block';
                this.addSubmitListener(q);
            } else {
                // no post name provided, hide comment entry
                document.querySelector('.addEntry').style.display = 'none';
            }
            // get the comments from the model
            let entries = this.model.getEntries();
            if (entries === null) {
                // avoid an error if there are no comments yet.
                entries = [];
            }
            renderEntryList(parent.lastChild, entries);
        } catch (error) {
            console.log(error);
        }
    }

    show() {
        const entryElement = this.parentElement;
        showJournalList();
    }

}

export default JournalController;
