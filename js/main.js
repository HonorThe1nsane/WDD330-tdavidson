

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

    },
    {
        label: "Week 7 Notes",
        url: "week7.html"

    },
    {
        label: "Chuck Norris Excercise",
        url: "chuckNorrisWeek7"


    },
    {
        label: "Week 8 Notes",
        url: "week8.html"

    },
    {
        label: "Star Wars API Excercise",
        url: "starWarsWeek8/teamW8.html"
    },
    {
        label: "Hikes MVC Team Activity",
        url: "teamActw05/hiking-complete.html"
    },
    {
        label: "Tic Tac Toe",
        url: "TicTacToe/teamWK3tictac.html"
    },
    {
        label: "Week 9 Notes",
        url: "week9.html"
    },
    {
        label: "Week 9 Team Activity",
        url: "js-30-drums/index-START.html"
    },
    {
        label: "Week 10 Notes",
        url: "week10.html"

    },
    {
        label: "Week 10 Team Activity",
        url: "teamActw10/index.html"
    },
    {
        label: "Week 11 Team Activity",
        url: "week11/json-server/client/week11.html"
    },
    {
        label: "Final Project",
        url: "final/journal.html"
    }


]


var ul = document.createElement("ul");
var list = document.getElementById('portfolioList');
var li, a, text;
for (var i = 0, l = links.length; i < l; ++i) {
    li = document.createElement('li');
    a = document.createElement('a');
    text = document.createTextNode(links[i].label);

    a.href = links[i].url;
    a.setAttribute("class", 'dropdown-item');
    a.appendChild(text);
    li.appendChild(a);
    ul.appendChild(li);

}
list.appendChild(ul);

