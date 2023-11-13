class DDday {
  constructor(planet1 = 'Earth', planet2 = 'Mars', planet3 = 'Venus', planet4 = 'Jupiter', planet5 = 'Mercury') {
    this.planet1 = planet1;
    this.planet2 = planet2;
    this.planet3 = planet3;
    this.planet4 = planet4;
    this.planet5 = planet5;
  }

  // You can add additional methods for alternative ways of initializing the properties
  initializeWithNumbers() {
    this.planet1 = 4.147;
    this.planet2 = 1.62;
    this.planet3 = 1;
    this.planet4 = 0.531;
    this.planet5 = 0.083;
  }
}

describe('DDday', () => {
  test('constructor should set planet properties with default values', () => {
    const instance = new DDday();

    expect(instance.planet1).toBe('Earth');
    expect(instance.planet2).toBe('Mars');
    expect(instance.planet3).toBe('Venus');
    expect(instance.planet4).toBe('Jupiter');
    expect(instance.planet5).toBe('Mercury');
  });

  test('initializeWithNumbers should set planet properties with numeric values', () => {
    const instance = new DDday();
    instance.initializeWithNumbers();

    expect(instance.planet1).toBe(4.147);
    expect(instance.planet2).toBe(1.62);
    expect(instance.planet3).toBe(1);
    expect(instance.planet4).toBe(0.531);
    expect(instance.planet5).toBe(0.083);
  });
});

  
    
  

