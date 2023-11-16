export class DDday {
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
    this.planet4 = 0.531;
    this.planet5 = 0.083;
    }

    getAgeForPlanet(planet) {
    return this[planet.toLowerCase()] || 0;
    }
}