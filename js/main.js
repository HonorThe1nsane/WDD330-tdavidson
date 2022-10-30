

var links = [
    {
        label: "Week 1 Notes",
        url: "week1.html"
    },
    {
        label: "Week 2 Notes",
        url: "week2.html"

    },
    {
        label: "Week 3 Notes",
        url: "week3.html"

    },
    {
        label: "Week 4 Notes",
        url: "week4.html"

    },
    {
        label: "Week 5 Notes",
        url: "week5.html"

    },
    {
        label: "Week 6 ToDo App",
        url: "toDoApp"

    }
];


var ul = document.createElement("ul");
var list = document.getElementById('portfolioList');
var li, a, text;
for (var i = 0, l = links.length; i < l; ++i) {
    li = document.createElement('li');
    a = document.createElement('a');
    text = document.createTextNode(links[i].label);

    a.href = links[i].url;
    a.setAttribute("class", "portfolioLinks");
    a.appendChild(text);
    li.appendChild(a);
    ul.appendChild(li);

}
list.appendChild(ul);

