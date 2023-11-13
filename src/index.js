import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import DDday from "./planet"; // Fix import statement

function handleAgeFinderForm(event) {
  event.preventDefault();
  document.querySelector("#result").innerText = null; // Fix ID here
  const Age2 = parseInt(document.querySelector("#Age2").value); // Add #
  const Age1 = parseInt(document.querySelector("#Age1").value); // Add #
  const planetList = document.querySelector("#planetList").value; // Add #
  const instance = new DDday
  const AgeForPlanet = instance.AgeForPlanet(planetList);
}

// Attach the event listener outside the function
window.addEventListener("load", function () {
  document.querySelector("#AgeFinder").addEventListener("submit", handleAgeFinderForm); // Fix function name
});
