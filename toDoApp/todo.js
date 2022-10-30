// Create a "close" button and append it to each list item

class ToDoList {


    hideClosedItem() {
        var list = document.querySelector('ul');
        list.addEventListener('click', function (ev) {
            if (ev.target.tagName === 'LI') {
                ev.target.classList.toggle('checked');
            }
        }, false);
    }
    addCheck() {
        var list = document.querySelector('ul');
        list.addEventListener('click', function (ev) {
            if (ev.target.tagName === 'LI') {
                ev.target.classList.toggle('checked');
            }
        }, false);
    }
    getToDo() {
        //close button
        var myNodelist = document.getElementsByTagName("LI");
        var j;
        for (j = 0; j < myNodelist.length; j++) {
            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.appendChild(txt);
            myNodelist[j].appendChild(span);
        }

        var li = document.createElement("li");
        var inputValue = document.getElementById("myInput").value;
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
            alert("You must enter something!");
        } else {
            document.getElementById("myUL").appendChild(li);
        }
        document.getElementById("myInput").value = "";


        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);
        let i = 0;
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                var div = this.parentElement;
                div.style.display = "none";
            }
        }
    }

}

export default ToDoList;