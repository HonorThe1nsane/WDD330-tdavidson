//exercise for the canvas element

window.addEventListener("load", drawImageToCanvas, true);

var canvas = document.getElementById("myCanvas");
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
context.strokeStyle = "red";
context.fillStyle = "rgba(0, 0, 255, 0.5)";
context.fillRect(10, 10, 100, 100);
context.strokeRect(10, 10, 100, 100);

function drawPattern() {

    var canvas = document.getElementById("demo2");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";
    context.fillStyle = "rgba(0, 0, 255, 0.5)";


    var img = new Image();
    img.src = "/images/bg-bike.png";
    img.onload = function () {
        var pattern = context.createPattern(img, "repeat");
        context.fillStyle = pattern;
        context.fillRect(10, 10, 100, 100);
        context.strokeRect(10, 10, 100, 100);
    };
}

drawPattern()

function drawGradient() {
    var canvas = document.getElementById("demo3");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";
    context.fillStyle = "rgba(0, 0, 255, 0.5)";

    var gradient = context.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, "blue");
    gradient.addColorStop(1, "white");
    context.fillStyle = gradient;
    context.fillRect(10, 10, 100, 100);
    context.strokeRect(10, 10, 100, 100);
}

drawGradient();

function drawCircle(canvas) {
    var canvas = document.getElementById("demo4");
    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(50, 50, 30, 0, Math.PI * 2, true);
    context.arc(100, 100, 50, 0, Math.PI * 2, true);
    context.closePath();
    context.strokeStyle = "red";
    context.fillStyle = "blue";
    context.lineWidth = 3;
    context.fill();
    context.stroke();
}

drawCircle(canvas);


function saveDrawing() {
    var canvas5 = document.getElementById("demo5");
    window.open(canvas5.toDataURL("image/png"));
}

var button = document.getElementById("saveButton");
button.addEventListener("click", saveDrawing, false);

function drawImageToCanvas() {
    var canvas = document.getElementById("demo6");
    var context = canvas.getContext("2d");
    var image = document.getElementById("myImageElem");
    context.drawImage(image, 0, 0);
}

drawImageToCanvas();

function determineLocation() {
    if (navigator.onLine) {
        if (Modernizr.geolocation) {
            navigator.geolocation.getCurrentPosition(displayOnMap);

            var container = Raphael(document.getElementById("spinner"), 125, 125);
            var spinner = container.image("images/spinnerBW.svg", 0, 0, 125, 125);
            var attrsToAnimate = { transform: "r720" };
            spinner.animate(attrsToAnimate, 60000);

        }
    }
}

determineLocation();

function displayOnMap() {
    document.getElementById("spinner").style.display = "none";
}
