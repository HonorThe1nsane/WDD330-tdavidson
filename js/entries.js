// The controller needs access to both the model and the view...so let's import them
import JournalModel from './journal-model.js';
import JournalView from './journal-view.js';





// Comments controller
export class JournalController {
    constructor(type, commentElementId) {
        this.type = type;
        this.commentElementId = commentElementId;
        this.view = new JournalView(this.type);
        this.model = new JournalModel(this.type);
        this.entries = this.model.entries;
    }





    addSubmitListener(id) {
        document.getElementById('entrySubmit').onclick = () => {
            this.view.validateInput();
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
            this.showJournalList(id);
        };
    }



    removeEntryListener(removeEntryItem) {
        document.getElementById('delete').onclick = () => {
            this.model.removeFromLS(removeEntryItem);

        }

    }




    showJournalList() {
        let q = this.model.entries.id;


        console.log(this.model.entries);
        try {
            const parent = document.getElementById(this.commentElementId);
            if (!parent) throw new Error('comment parent not found');
            // check to see if the entryUI code has been added yet
            if (parent.innerHTML === '') {
                parent.innerHTML = this.view.entryUI;
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
            this.view.renderEntryList(parent.lastChild, entries);


        } catch (error) {
            console.log(error);
        }
    }




}

export default JournalController;
