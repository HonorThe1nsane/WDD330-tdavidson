

var links = [
    {
        label: "Week 1 Notes",
        url: "week1.html"
    },
    {
        label: "Week 2 Notes",
        url: "week2.html"

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

