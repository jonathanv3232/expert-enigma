
  function append(answer) {
    var result = document.getElementById("result");
    result.innerHTML = answer;
  }

  function getValue(id) {
    return parseInt(document.getElementById(id).value);
  }
  function add() {
    var result = getValue("num1") + getValue("num2");
    append(result);
  }

  function subtract() {
    var result = getValue("num1") - getValue("num2");
    append(result)
  }

  function multiply() {
    var result = getValue("num1") + getValue("num2");
    append(result);

  }
  function divide() {
    var result = getValue("num1") / getValue("num2");
    append(result);

  }
