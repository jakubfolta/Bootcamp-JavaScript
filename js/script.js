'use strict'

var output = document.getElementById('greeter-output');

output.innerHTML = 'Click the button! I want to say hello!' + '<br><br>' + output.innerHTML;

var button = document.getElementById('greeter-button');
var userName;

button.addEventListener('click', function(){
	userName = window.prompt('What is your name?');
    if (userName == '') {
        output.innerHTML = 'Hello stranger' + '<br><br>' + output.innerHTML;
    }

    else {
       output.innerHTML = 'You have to enter your name!' + '<br><br>' + output.innerHTML;
    }

});
