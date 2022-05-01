var btns = document.getElementsByClassName('btn');
var input1 = document.getElementById('1');
var input2 = document.getElementById('2');
function calc(operation) {
    var number1 = Number(input1.value)
    var number2 = Number(input2.value)
    if (operation === '+') {
        var result = number1 + number2;
    } else if (operation === '-') {
        var result = number1 - number2;
    } else if (operation === '*') {
        var result = number1 * number2;
    } else {
        var result = number1 / number2;
    }
    var stt =
    console.log(result)
}

function onOperationButtonClick(eventObject) {
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    calc(operation);
}


for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', onOperationButtonClick);
}

