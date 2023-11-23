import "bootstrap";
import "../node_modules/bootstrap/min.css"
import { DDday } from "../src/DDday.js";

function handleAgeFinderForm(event) {
  event.preventDefault();
  document.querySelector("#result").innerText = null; // Fix ID here
  const Age1 = parseInt(document.querySelector("#Age1").value);
  const Past1 = parseInt(document.querySelector("#Past1").value);
  const Future1 = parseInt(document.querySelector("#Future1").value);
  const planetList = document.querySelector("#planetList").value;

  // Get the selected planet value
  let calculatedAge;

  if (document.querySelector('input[name="Time"]:checked')) {
    const selectedTime = document.querySelector('input[name="Time]:checked').value;

    if (selectedTime === 'past') {
      calculatedAge = new DDday(Age1, null, Past1);
      let result;
      switch (planetList) {
        case 'planet1':
          result = calculatedAge.mercuryFuture();
          break;
        case 'planet2':
          result = calculatedAge.venusFuture();
          break;
        case 'planet3':
          result = calculatedAge.marsFuture();
          break;
        case 'planet4':
          result = calculatedAge.jupiterFuture();
          break;
        default:
          result = 'Invalid planet selection';
      }
    }
  } else if (selectedTime === 'future') {
    calculatedAge = new DDday(Age1, Future1, null);
    let result;
    switch (planetList) {
      case 'planet1':
        result = calculatedAge.mercuryPast();
        break;
      case 'planet2':
        result = calculatedAge.venusPast();
        break;
      case 'planet3':
        result = calculatedAge.marsPast();
        break;
      case 'planet4':
        result = calculatedAge.jupiterPast();
        break;
      default:
        result = 'Invalid planet selection';
    }
  }





  // Attach the event listener outside the function
  window.addEventListener("load", function () {
    document.querySelector("#AgeFinder").addEventListener("submit", handleAgeFinderForm);
  });

}
