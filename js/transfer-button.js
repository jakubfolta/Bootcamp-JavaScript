'use strict'

var output = document.getElementById('greeter-output');
output.innerHTML = 'Click the button to check temperature in Fahrenheit scale.' + '<br><br>' + output.innerHTML;

var button = document.getElementById('greeter-button');
var temperature;
var Ftemperature;

button.addEventListener('click', function() {
    temperature = window.prompt('What\'s the temperature? Enter the number: ');
    if (typeof temperature == 'number') {
        output.innerHTML = 'You ddhave to ffenter the number!' + '<br><br>' + output.innerHTML;
    }
    else {
        Ftemperature = (temperature * 1.8) + 32;
        output.innerHTML = 'Celsius temperature is ' + temperature + '°C' + '\n' +
        ' and Fahrenheit temperature is ' + Ftemperature + '°F' + '<br><br>' + output.innerHTML;
    }
});
