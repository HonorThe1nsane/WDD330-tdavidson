
class JournalView {
    renderJournalList(journalListElement, journalList) {
        // I decided to let the controller handle where the list gets placed. So instead of getting the element here in the function, when I created the view I decided to pass the target element in.
        // const journalListElement = document.getElementById('hikes');

        journalListElement.innerHTML = '';
        // the list of hikes doesn't exist here in the view either...so I've passed that in as well.
        journalList.forEach(entry => {
            // notice the call to 'this' below. 'this' is like adding './' at the beginning of a path. It helps the computer find things.
            journalListElement.appendChild(this.renderOneHikeLight(hike));
        });
    }
    renderOneJournalLight(entry) {
        const item = document.createElement('li');
        item.classList.add('light');
        item.setAttribute('data-name', hike.name);
        item.innerHTML = `
        <h2>${entry.fname}${entry.lname}</h2>
        <div>
            <div>
                <h3>${entry.date}</h3>
                <p>${entry.chapter}${entry.verse}</p>
            </div>
        </div>`;
        return item;
    }

    renderOneJournalFull(parent, entry) {
        const backButton = document.createElement('button');
        backButton.innerHTML = '&lt;- All Entries';
        backButton.setAttribute('id', 'backBtn');
        const item = document.createElement('li');
        item.innerHTML = `
            <h2>${entry.fname}${entry.lname}</h2>
            <div>
                <h3>${entry.date}</h3>
                <p>${entry.chapter}${entry.verse}</p>
            </div>
        `;
        parent.innerHTML = '';
        item.insertBefore(backButton, item.childNodes[2]);
        parent.appendChild(item);
        return backButton;
    }
}
export default JournalView;
