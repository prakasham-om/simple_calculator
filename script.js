var display = document.getElementById("key_display");
var buttons = document.getElementsByClassName("button");

function clearDisplay() {
    document.getElementById('key_display').innerHTML= display;
}

function displayNumber(number) {
 
  document.getElementById('key_display').innerHTML= display.value += number;
}

function calculate() {
  var expression = display.value;
  var result = eval(expression);
 // console.log(expression)
 document.getElementById('result').innerHTML=result;
}

for (var i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function() {

    var value = this.id;
    if (value == "Clear") {
      clearDisplay();
    } else if (value == "=") {
      calculate();
    } else {
      displayNumber(value);
    }
  };
}