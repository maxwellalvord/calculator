// business logic

function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}


// interface logic

$(document).ready(function() {
  $("button#add").click(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const result = add(number1, number2);
    $("#output").text(result);
  });
  $("button#multiply").click(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    console.log(number2);
    const result = multiply(number1, number2);
    $("#output").text(result);
  });
  $("button#subtract").click(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const result = subtract(number1, number2);
    $("#output").text(result);
  });
  $("button#divid").click(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const result = divid(number1, number2);
    $("#output").text(result);
  });
});