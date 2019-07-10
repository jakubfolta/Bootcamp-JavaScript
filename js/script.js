'use strict'

var output = document.getElementById('greeter-output');

output.innerHTML = 'Click the button! I want to say hello!' + '<br><br>' + output.innerHTML;

var button = document.getElementById('greeter-button');

var userName;

button.addEventListener('click', function(){
    if (userName) {
        window.prompt('I already sad hello ' + userName + '!');
    }
    else {
        userName = window.prompt('What is your name?');
        if (userName == null || userName == '') {
            output.innerHTML = 'Please enter your name!' + '<br><br>' + output.innerHTML;
        }
        else {
            output.innerHTML = 'Welcome ' + userName + '<br><br>' + output.innerHTML;
        }
    }
});
