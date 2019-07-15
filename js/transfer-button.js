'use strict'

var output, foutput;

output = document.getElementById('greeter-output')
foutput = document.getElementById('greeter-foutput')

output.innerHTML = 'Click the red button to check temperature in Fahrenheit scale.' + '<br><br>';
foutput.innerHTML = 'Click the blue button to check temperature in Celcius scale.' + '<br><br>';

var button, fbutton, rbutton;

button = document.getElementById('greeter-button');
fbutton = document.getElementById('greeter-fbutton');

var temperature, fTemperature, zero, warm, hot, veryHot, fahrenheitMulti, fahrenheitNumb, celciusDivide, answers;

zero = 0;
warm = 10;
hot = 20;
veryHot = 49;
fahrenheitMulti = 1.8;
fahrenheitNumb = 32;
celciusDivide = 5/9;

answers = [
    'This temperature is a melting point of ice.' + '<br><br>',
    'Most bacteria do not live above this temperature.' + '<br><br>',
    'Summer is starting!' + '<br><br>',
    'We have winter right now.' + '<br><br>',
    'Winter is over, time for spring!' + '<br><br>'
]

var checkAnswer, giveAnswer, cTempConvert, fTempConvert;

checkAnswer = function(number) {
    return number == zero ? answers[0]
        : (number < veryHot && number >= hot) ? answers[2]
        : number <= warm ? answers[3]
        : (warm < number && number < hot) ? answers[4]
        : answers[1];
}

giveAnswer = function(text) {
    return rbutton ? output.innerHTML = text + output.innerHTML
        : foutput.innerHTML = text + foutput.innerHTML;
}

cTempConvert = function(number) {
    number = (number * fahrenheitMulti) + fahrenheitNumb;
    return number;
}

fTempConvert = function(number) {
    number =(number - fahrenheitNumb) * (celciusDivide);
    return number;
}

button.addEventListener('click', function() {
    temperature = parseInt(window.prompt('What\'s the temperature? Enter the number: '));
    if (isNaN(temperature) == true) {
        output.innerHTML = 'You have to enter the number!' + '<br><br>';
    }
    else {
        rbutton = true;
        fTemperature = cTempConvert(temperature);
        output.innerHTML = 'Celsius temperature is ' + temperature + '°C' + '\n' +
        ' and Fahrenheit temperature is ' + fTemperature + '°F' + '<br><br>';

        giveAnswer(checkAnswer(temperature));
    }
});

fbutton.addEventListener('click', function() {
    fTemperature = parseInt(window.prompt('What\'s the temperature? Enter the number: '));
    if (isNaN(fTemperature) == true) {
        foutput.innerHTML = 'You have to enter the number!' + '<br><br>';
    }
    else {
        rbutton = false;
        temperature = fTempConvert(fTemperature);
        foutput.innerHTML = 'Fahrenheit temperature is ' + fTemperature + '°F' + '\n' +
        ' and Celcius temperature is ' + temperature + '°C' + '<br><br>';

        giveAnswer(checkAnswer(temperature));
    }
});
