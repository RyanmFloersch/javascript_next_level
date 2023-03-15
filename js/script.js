

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

function toggleDarkMode( something) {
    // something parameter was added for this example
    // adding stopPropagatio() here stops the other button event from displaying as well. 
    something.stopPropagation();

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

function startCountdown() {

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
    startCountdown();

    button.addEventListener('click', toggleDarkMode);

    var bubbleDiv = document.querySelector(".bubble");
    bubbleDiv.addEventListener('click',function(){
       console.log('do I still work'); 
    });

}

init();

















