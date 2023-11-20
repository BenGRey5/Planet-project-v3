export class DDday {
    constructor(
        age, future
        // planet1 = 'Earth',
        // planet2 = 'Mars',
        // planet3 = 'Venus',
        // planet4 = 'Jupiter',
        // planet5 = 'Mercury'
    ) {
        this.age = age
        this.future = future
        // this.planet1 = planet1;
        // this.planet2 = planet2;
        // this.planet3 = planet3;
        // this.planet4 = planet4;
        // this.planet5 = planet5;
    }
    mercuryAge() {
        return this.age / 0.24
    }
    venusAge() {
        return parseFloat((this.age / 0.62).toFixed(2))
    }
    marsAge() {
        return parseFloat((this.age / 1.88).toFixed(2))
    }
    jupiterAge() {
        return parseFloat((this.age / 11.86).toFixed(2))
    }
    mercuryFuture() {
        return parseFloat(((this.future - this.age) / 0.24).toFixed(2));
    }
    venusFuture() {
        return parseFloat(((this.future - this.age) / 0.62).toFixed(2));
    }
    marsFuture() {
        return parseFloat(((this.future - this.age) / 1.88).toFixed(2));
    }
    jupiterFuture() {
        return parseFloat(((this.future - this.age) / 11.86).toFixed(2))
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