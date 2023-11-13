import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import DDday from "./planet.test.js";


function handleAgeFinderForm(event) {
  event.preventDefault();
  document.querySelector("#response").innerText = null;
  const Age2 = parseInt(document.querySelector("Age2").value);
  const Age1 = parseInt(document.querySelector("Age1").value);
  let planetList = (document.querySelector("planetList").value);
  
window.addEventListener("load", function () {
  document.querySelector("#AgeFinder").addEventListener("submit", handleTriangleForm);
});
gfgdfgfffffff