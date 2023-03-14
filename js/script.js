

var h1=document.querySelector('h1');
var button = document.querySelector('button');
var body = document.body;

h1.innerText = 'JS Next Level'

button.addEventListener('click', function(){
    // var body = document.body;
    // body.style.cssText = "background-color: #777; color: red" ;
    body.setAttribute('class', 'darkmode');
    
})
