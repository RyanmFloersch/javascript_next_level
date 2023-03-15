

var h1 = document.querySelector('h1');
var button = document.querySelector('button');
var body = document.body;

//Create a variable that trackes if dark mode is active
var isDark = false;
var h3 = document.querySelector("h3");
var count = 5;


function setHeaderText() {
    h1.innerText = 'JS Next Level'

}

//Togle between light mode and dark
//If varaible is true, switch to light else switch to dark 

function toggleDarkMode() {
    if (isDark === false) {
        body.classList.add("darkmode");
        button.innerText = 'Light Mode';
        isDark = true;
    } else {
        body.classList.remove("darkmode");
        button.innerText = 'Dark Mode';
        isDark = false;
    }

}


function colorBlast() {
    body.classList.add('splash');
}

function countdown() {

    h3.innerText = "count " + count;
    var timer = setInterval(function () {
        count--;
        h3.innerText = "count " + count;

        if (count === 0) {
            clearInterval(timer);
            // colorBlast();
        }
    }, 1000)
}


function init() {

    setHeaderText();
    countdown();

    button.addEventListener('click', toggleDarkMode);

}

init();