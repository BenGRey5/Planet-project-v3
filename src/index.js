class DDday {
  constructor(
    planet1 = 'Earth',
    planet2 = 'Mars',
    planet3 = 'Venus',
    planet4 = 'Jupiter',
    planet5 = 'Mercury'
  ) {
    this.planet1 = planet1;
    this.planet2 = planet2;
    this.planet3 = planet3;
    this.planet4 = planet4;
    this.planet5 = planet5;
  }

  initializeWithNumbers() {
    this.planet1 = 4.147;
    this.planet2 = 1.62;
    this.planet3 = 1;
    this.planet4 = .531;
    this.planet5 = .083;
  }

  getAgeForPlanet(planet) {
    return this[planet.toLowerCase()] || 0;
  }
}

function handleAgeFinderForm(event) {
  event.preventDefault();
  document.querySelector("#result").innerText = null; // Fix ID here
  const Age2 = parseInt(document.querySelector("#Age2").value);
  const Age1 = parseInt(document.querySelector("#Age1").value);
  const planetList = document.querySelector("#planetList");
  
  // Get the selected planet value
  const selectedPlanet = planetList.options[planetList.selectedIndex].value;

  // Create an instance of DDday
  const instance = new DDday();
  
  // Get the age for the selected planet
  const ageForPlanet = instance.getAgeForPlanet(selectedPlanet);

  // Call the function to update the result
  updateAgeResult(Age1, Age2, ageForPlanet);
}

function updateAgeResult(Age1, Age2, ageForPlanet) {
  const Age3 = (Age1 - Age2) * ageForPlanet;
  document.querySelector("#result").innerText = "Your age is " + Age3.toFixed(2) + " years old";
}

// Attach the event listener outside the function
window.addEventListener("load", function () {
  document.querySelector("#AgeFinder").addEventListener("submit", handleAgeFinderForm);
});


