'use strict'

var output = document.getElementById('greeter-output');
output.innerHTML = 'Click the red button to check temperature in Fahrenheit scale.' + '<br><br>';
var foutput = document.getElementById('greeter-foutput');
foutput.innerHTML = 'Click the blue button to check temperature in Celcius scale.' + '<br><br>';
var button = document.getElementById('greeter-button');
var fbutton = document.getElementById('greeter-fbutton');
var temperature;
var Ftemperature;
var regex = /^[0-9]+$/;

button.addEventListener('click', function() {
    temperature = window.prompt('What\'s the temperature? Enter the number: ');

    if (!temperature.match(regex)) {
        output.innerHTML = 'You have to enter the number!' + '<br><br>';
    }
    else {
        Ftemperature = (temperature * 1.8) + 32;
        output.innerHTML = 'Celsius temperature is ' + temperature + '°C' + '\n' +
        ' and Fahrenheit temperature is ' + Ftemperature + '°F' + '<br><br>';
        if (temperature == 0) {
            output.innerHTML = 'This temperature is a melting point of ice.' + '<br><br>' + output.innerHTM;
        }
        else if (Ftemperature > 120) {
            output.innerHTML = 'Most bacteria do not live above this temperature.' + '<br><br>' + output.innerHTML;
        }
        else if (temperature >= 20) {
            output.innerHTML = 'Summer is starting!' + '<br><br>' + output.innerHTML;
        }
        else if (temperature <= 10) {
            output.innerHTML = 'We have winter right now.' + '<br><br>' + output.innerHTML;
        }
        else if (10 < temperature < 20) {
            output.innerHTML = 'Winter is over, time for spring!.' + '<br><br>' + output.innerHTML;
        }
    }
});

fbutton.addEventListener('click', function() {
    Ftemperature = window.prompt('What\'s the temperature? Enter the number: ');

    if (!Ftemperature.match(regex)) {
        foutput.innerHTML = 'You have to enter the number!' + '<br><br>';
    }
    else {
        temperature = (Ftemperature -32) * (5/9);
        foutput.innerHTML = 'Fahrenheit temperature is ' + Ftemperature + '°F' + '\n' +
        ' and Celcius temperature is ' + temperature + '°C' + '<br><br>';
        if (Ftemperature == 32) {
            foutput.innerHTML = 'This temperature is a melting point of ice.' + '<br><br>' + foutput.innerHTML;
        }
        else if (Ftemperature > 120) {
            foutput.innerHTML = 'Most bacteria do not live above this temperature.' + '<br><br>' + foutput.innerHTML;
        }
        else if (Ftemperature >= 68) {
            foutput.innerHTML = 'Summer is starting!' + '<br><br>' + foutput.innerHTML;
        }
        else if (Ftemperature <= 50) {
            foutput.innerHTML = 'We have winter right now.' + '<br><br>' + foutput.innerHTML;
        }
        else if (50 < Ftemperature < 68) {
            foutput.innerHTML = 'Winter is over, time for spring!.' + '<br><br>' + foutput.innerHTML;
        }
    }
});
