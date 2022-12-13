// The controller 
import JournalModel from './journal-model.js';
import JournalView from './journal-view.js';

import Entries from './entries.js';

export default class JournalController {
    //  constructor
    constructor(parentId) {
        this.parentElement = document.getElementById(parentId);
        this.hikeModel = new JournalModel();
        this.hikesView = new JournalView(parentId);
        //add an instance of our comments class to the controller
        this.entries = new Entries('fname', 'entry');
    }
    showJournalList() {
        const journalListElement = this.parentElement;

        const journalList = this.journalModel.getAllEntries();

        this.journalView.renderJournalList(journalListElement, journalList);

        this.addJournalListener();

        this.entries.showEntryList();
    }
    showOneEntry(fname) {

        const fname = this.journalModel.getSingleJournal(fname);
        this.journalView.renderOneEntryFull(
            this.parentElement,
            fname
        ).ontouchend = () => {
            this.showJournalList();
        };
        this.addBackListener();
        // show the comments for just this hike
        this.comments.showCommentList(hikeName);
    }
    // in order to show the details of a hike ontouchend we will need to attach a listener AFTER the list of hikes has been built. The function below does that.
    addHikeListener() {
        // We need to loop through the children of our list and attach a listener to each, remember though that children is a nodeList...not an array. So in order to use something like a forEach we need to convert it to an array.
        const childrenArray = Array.from(this.parentElement.children);
        childrenArray.forEach(child => {
            child.addEventListener('click', e => {
                this.showOneEntry(e.currentTarget.dataset.name);
            });
        });
    }
    addBackListener() {
        let backButton = document.getElementById('backBtn');
        backButton.addEventListener('click', e => {
            this.showJournalList();
        });
    }
    

}
window.onload = function getDate() {
    let displayDate = document.getElementById("date");
    displayDate.innerText = new Date().toLocaleDateString();
}

