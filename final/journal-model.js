function readFromLS(key) {
    // the string we retrieve from localStorage needs to be converted back to an object with JSON.parse
    // console.log(key)
    return JSON.parse(window.localStorage.getItem(key));
}


function writeToLS(key, data) {
    // we can use JSON.stringify to convert our object to a string that can be stored in localStorage.
    window.localStorage.setItem(key, JSON.stringify(data));
}

class JournalModel {
    constructor(type) {
        this.type = type;
        this.entries = readFromLS(this.type) || [
            {
                id: 1,
                firstName: 'Troy',
                lastName: 'Davidson',
                book: '1 Nephi',
                chapter: '3',
                verse: '7',
                notes: 'I will go and do as the Lord commands!',
                date: new Date()
            }

        ];

    }

    removeFromLS(key) {
        console.log(key);
        for (let i = 0; i < this.entries.length; i++) {
            if (this.entries[i].id == key) {
                this.entries.splice(i, 1);
                break;
            }
        }
        console.log(this.entries);
        writeToLS(this.type, this.entries);
    }


    getEntries() {
        return this.entries.filter(el => el.id);
    }


    addEntry(fname, lname, book, chapter, verse, notes) {
        const newEntry = {
            id: this.entries.length > 0 ? this.entries[this.entries.length - 1].id + 1 : 1,
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

export default JournalModel;
