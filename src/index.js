import "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";npm --
import DDday from "./planet.test";

function handleAgeFinderForm(event) {
  event.preventDefault();
  document.querySelector("#result").innerText = null; // Fix ID here
  const Age2 = parseInt(document.querySelector("#Age2").value); // Add #
  const Age1 = parseInt(document.querySelector("#Age1").value); // Add #
  const planetList = document.querySelector("#planetList").value; // Add #
  const instance = new DDday();
  const ageForPlanet = instance.getAgeForPlanet(planetList); // Fix method name
  updateAgeResult(Age1, Age2, ageForPlanet);
}

function updateAgeResult(Age1, Age2, ageForPlanet) {
  const Age3 = (Age1 - Age2) * ageForPlanet;
  document.querySelector("#result").innerText = "Your age is " + Age3.toFixed(2) + " years old"; // Fix spacing
}

// Attach the event listener outside the function
window.addEventListener("load", function () {
  document.querySelector("#AgeFinder").addEventListener("submit", handleAgeFinderForm); // Fix function name
});

