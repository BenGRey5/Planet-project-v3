import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { DDday } from "../src/DDday.js";

// Move the event listener outside the function
window.addEventListener("load", function () {
  document.querySelector("#AgeFinder").addEventListener("submit", handleAgeFinderForm);
});

function handleAgeFinderForm(event) {
  event.preventDefault();
  document.querySelector("#result").innerText = null;

  const Age1 = parseInt(document.querySelector("#Age1").value);
  const Past1 = parseInt(document.querySelector("#Past1").value);
  const Future1 = parseInt(document.querySelector("#Future1").value);
  const planetList = document.querySelector("#planetList").value;

  let calculatedAge;

  const selectedTime = document.querySelector('input[name="Time"]:checked');

  if (selectedTime) {
    const timeValue = selectedTime.value;

    if (timeValue === 'past') {
      calculatedAge = new DDday(Age1, 0, Past1);
    } else if (timeValue === 'future') {
      calculatedAge = new DDday(Age1, Future1, 0);
    }

    let result;

    switch (planetList) {
      case 'Mercury':
        result = calculatedAge ? calculatedAge.mercuryAll() : 'Calculated age is undefined';
        break;
      case 'Venus':
        result = calculatedAge ? calculatedAge.venusAll() : 'Calculated age is undefined';
        break;
      case 'Mars':
        result = calculatedAge ? calculatedAge.marsAll() : 'Calculated age is undefined';
        break;
      case 'Jupiter':
        result = calculatedAge ? calculatedAge.jupiterAll() : 'Calculated age is undefined';
        break;
      default:
        result = 'Invalid planet selection';
    }

    // Display the result
    document.querySelector("#result").innerText = `Your age on ${planetList}: ${result}`;
  }
}




