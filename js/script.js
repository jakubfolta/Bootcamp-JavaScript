'use strict'

var output = document.getElementById('greeter-output');

output.innerHTML = 'Click the button! I want to say hello!' + '<br><br>' + output.innerHTML;

var button = document.getElementById('greeter-button');

var userName;

button.addEventListener('click', function(){
	userName = window.prompt('What is your name?');
});
