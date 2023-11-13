class DDday {
  constructor(planet1, planet2, planet3, planet4, planet5){
  this.pllanet1 =planet1;
  this.pllanet2 =planet2;
  this.pllanet3 =planet3;
  this.pllanet4 =planet4;
  this.pllanet5 =planet5;
}
}

describe('./DDday', () => {
  test('constructor should set planet properties', () => {
    const instance = new DDday('Earth', 'Mars', 'Venus', 'Jupiter', 'Mercury');

    expect(instance.planet1).toBe('Mercury')
    expect(instance.planet2).toBe('Venus')
    expect(instance.planet3).toBe('Earth')
    expect(instance.planet4).toBe('Mars')
    expect(instance.planet5).toBe('Jupiter')
  });
});
