document.addEventListener("DOMContentLoaded", function() {

  let buttonResult = document.getElementById('buttonResult');
  let resultText = document.getElementById('result');
  resultText.innerText = '';
  let count = 0;
  let text = document.getElementById('text');
  let letterInput = document.getElementById('letter');
  let validation_text = document.querySelector(".error-text");
  let validation_letter = document.querySelector('.error-letter');
  let error_text = false;
  let error_letter = false;

  function validate_text() {
    let text_value = text.value;
    let noLettersandDigits = /[^A-Za-z0-9\s]/;
    if (text_value.match(noLettersandDigits)) {
      validation_text.innerHTML = "Text field should contain only alphabet symbols and digits";
      error_text = true;
    } else if (text_value.length == 0) {
      validation_text.innerHTML = "Text field should contain minimum 1 character";
      error_text = true;
    } else {
      error_text = false;
    }
  }

  function validate_letter() {
    let letter_value = letterInput.value;
    let noDigits = /[^A-za-z]/;
    if (letter_value.match(noDigits)) {
      validation_letter.innerHTML = "Letter field should contain only alphabet symbols";
      error_letter = true;
    } else if (letter_value.length != 1) {
      validation_letter.innerHTML = "Letter field should contain only 1 character";
      error_letter = true;
    } else {
      error_letter = false;
    }
  }

  function calculate(string, letter) {
    resultText.innerText = '';
    for (var i = 0; i < string.length; i++) {
      if (string.charAt(i).toLowerCase() === letter.toLowerCase()) {
        count++
      } else {
        count = count + 0;
      }
    }
    return count;
  }

  buttonResult.addEventListener('click', function() {
    count = 0;
    validation_text.innerHTML = "";
    validation_letter.innerHTML = "";
    let string = text.value;
    let letter = letterInput.value;
    validate_text();
    validate_letter();
    if (error_text == false && error_letter == false) {
      resultText.innerText = calculate(string, letter);
    } else if (error_text == true && error_letter == false) {
      validation_text.style.visibility = "visible";
      resultText.innerText = '';
    } else if (error_text == false && error_letter == true) {
      validation_letter.style.visibility = "visible";
      resultText.innerText = '';
    } else {
      validation_text.style.visibility = "visible";
      validation_letter.style.visibility = "visible";
      resultText.innerText = ''
    }
  })

  function clearForm() {
    text.value = "";
    letterInput.value = "";
  }

  clearForm();

});
