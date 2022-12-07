window.onload = function getDate() {
    let displayDate = document.getElementById("date");
    displayDate.innerText = new Date().toLocaleDateString();
}

// ============== Model ========================= 
const contactsData = [{
    'fname': 'Troy',
    'lname': 'Davidson',
    'date': displayDate,
    'Chapter': ''
}