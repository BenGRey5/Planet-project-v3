import { DDday } from "./DDday.js";


describe('DDday', () => {
    test('constructor should set age', () => {
const instance = new DDday(5);
expect(instance.age).toEqual(5)
    })
    
    test('mercury equals age', () => {
        const instance = new DDday(3);
        expect(instance.mercuryAge()).toEqual(12.5)
    })
    
//     test('constructor should set planet properties with default values', () => {
//     const instance = new DDday();

//     expect(instance.planet1).toBe('Earth');
//     expect(instance.planet2).toBe('Mars');
//     expect(instance.planet3).toBe('Venus');
//     expect(instance.planet4).toBe('Jupiter');
//     expect(instance.planet5).toBe('Mercury');
//     });

//     test('initializeWithNumbers should set planet properties with numeric values', () => {
//     const instance = new DDday();
//     instance.initializeWithNumbers();

//     expect(instance.planet1).toBe(4.147);
//     expect(instance.planet2).toBe(1.62);
//     expect(instance.planet3).toBe(1);
//     expect(instance.planet4).toBe(0.531);
//     expect(instance.planet5).toBe(0.083);
//     });

//     describe('getAgeForPlanet', () => {
//     test('should return the age for a specific planet (default values)', () => {
//         const instance = new DDday();

//         expect(instance.getAgeForPlanet('Earth')).toBe(0);
//         expect(instance.getAgeForPlanet('Mars')).toBe(0);
//         expect(instance.getAgeForPlanet('Venus')).toBe(0);
//         expect(instance.getAgeForPlanet('Jupiter')).toBe(0);
//         expect(instance.getAgeForPlanet('Mercury')).toBe(0);
//         expect(instance.getAgeForPlanet('Nonexistent')).toBe(0);
//     });

//     test('should return the age for a specific planet (after initializeWithNumbers)', () => {
//         const instance = new DDday();
//         instance.initializeWithNumbers();

//         expect(instance.getAgeForPlanet('Earth')).toBe(4.147);
//         expect(instance.getAgeForPlanet('Mars')).toBe(1.62);
//         expect(instance.getAgeForPlanet('Venus')).toBe(1);
//         expect(instance.getAgeForPlanet('Jupiter')).toBe(0.531);
//         expect(instance.getAgeForPlanet('Mercury')).toBe(0.083);
//         expect(instance.getAgeForPlanet('Nonexistent')).toBe(0);
//     });
    });


