'use strict'

var output = document.getElementById('greeter-output');
output.innerHTML = 'Click the red button to check temperature in Fahrenheit scale.' + '<br><br>';

var foutput = document.getElementById('greeter-foutput');
foutput.innerHTML = 'Click the blue button to check temperature in Celcius scale.' + '<br><br>';

var button = document.getElementById('greeter-button');
var fbutton = document.getElementById('greeter-fbutton');
var temperature;
var fTemperature;
var regex = /^[0-9]+$/;

var zero = 0;
var warm = 10;
var hot = 20;
var veryHot = 49;

var answer
var answer1 = 'This temperature is a melting point of ice.' + '<br><br>';
var answer2 = 'Most bacteria do not live above this temperature.' + '<br><br>';
var answer3 = 'Summer is starting!' + '<br><br>';
var answer4 = 'We have winter right now.' + '<br><br>';
var answer5 = 'Winter is over, time for spring!' + '<br><br>';
var answer6 = 'I don\'t have info about this temperature.';

var checkAnswer = function(number) {
    return number == zero ? answer1
        : number > veryHot ? answer2
        : number >= hot ? answer3
        : number <= warm ? answer4
        : warm < number < hot ? answer5
        : answer6
}

var giveAnswer = function(text) {
    return output.innerHTML = text + output.innerHTML;
}

var cTempConvert = function(number) {
    number = (number * 1.8) + 32;
    return number;
}

var fTempConvert = function(number) {
    number =(number - 32) * (5/9);
    return number;
}

button.addEventListener('click', function() {
    temperature = parseInt(window.prompt('What\'s the temperature? Enter the number: '));

    if (isNaN(temperature) == true) {
        output.innerHTML = 'You have to enter the number!' + '<br><br>';
    }
    else {
        fTemperature = cTempConvert(temperature);
        output.innerHTML = 'Celsius temperature is ' + temperature + '°C' + '\n' +
        ' and Fahrenheit temperature is ' + fTemperature + '°F' + '<br><br>';

        giveAnswer(checkAnswer(temperature));
    }
});


fbutton.addEventListener('click', function() {
    fTemperature = window.prompt('What\'s the temperature? Enter the number: ');

    if (!fTemperature.match(regex)) {
        foutput.innerHTML = 'You have to enter the number!' + '<br><br>';
    }
    else {
        temperature = fTempConvert(fTemperature);
        foutput.innerHTML = 'Fahrenheit temperature is ' + fTemperature + '°F' + '\n' +
        ' and Celcius temperature is ' + temperature + '°C' + '<br><br>';
        if (fTemperature == 32) {
            foutput.innerHTML = 'This temperature is a melting point of ice.' + '<br><br>' + foutput.innerHTML;
        }
        else if (fTemperature > 120) {
            foutput.innerHTML = 'Most bacteria do not live above this temperature.' + '<br><br>' + foutput.innerHTML;
        }
        else if (fTemperature >= 68) {
            foutput.innerHTML = 'Summer is starting!' + '<br><br>' + foutput.innerHTML;
        }
        else if (fTemperature <= 50) {
            foutput.innerHTML = 'We have winter right now.' + '<br><br>' + foutput.innerHTML;
        }
        else if (50 < fTemperature < 68) {
            foutput.innerHTML = 'Winter is over, time for spring!.' + '<br><br>' + foutput.innerHTML;
        }
    }
});
