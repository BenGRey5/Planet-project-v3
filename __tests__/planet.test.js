import { DDday } from "../src/DDday.js";


describe('DDday', () => {
    test('constructor should set age', () => {
        const instance = new DDday(5);
        expect(instance.age).toEqual(5)
    })

    test('mercury equals age', () => {
        const instance = new DDday(3);
        expect(instance.mercuryAge()).toEqual(12.5)
    })
    test('venus equals age', () => {
        const instance = new DDday(3);
        expect(instance.venusAge()).toEqual(4.84)
    })
    test('mars equals age', () => {
        const instance = new DDday(3);
        expect(instance.marsAge()).toEqual(1.6)
    })
    test('jupiter equals age', () => {
        const instance = new DDday(3);
        expect(instance.jupiterAge()).toEqual(.25)
    })
    test('future minus age divided by mercury equals years', () => {
        const instance = new DDday(3, 7);
        expect(instance.mercuryFuture()).toEqual(16.67);
    })
    test('future minus age divided by venus equals years', () => {
        const instance = new DDday(3, 7);
        expect(instance.venusFuture()).toEqual(6.45)
    })
    test('future minus age divided by mars equals years', () => {
        const instance = new DDday(3, 7);
        expect(instance.marsFuture()).toEqual(2.13)
    })
    test('future minus age divided by jupiter equals years', () => {
        const instance = new DDday(3, 7);
        expect(instance.jupiterFuture()).toEqual(.34)
    })
    test('age minus past equals  mercury years', () => {
        const instance = new DDday(28, 0, 5);
        expect(instance.mercuryPast()).toEqual(95.83)
    })
    test('age minus past equals venus years', () => {
        const instance = new DDday(28, 0, 5);
        expect(instance.venusPast()).toEqual(37.1)
    })
    test('age minus past equals mars years', () => {
        const instance = new DDday(28, 0, 5);
        expect(instance.marsPast()).toEqual(12.23)
    })
    test('age minus past equals jupiter years', () => {
        const instance = new DDday(28, 0, 5);
        expect(instance.jupiterPast()).toEqual(1.94)
    })
    test('future all mercury', () => {
        const instance = new DDday(3, 7, 0)
        expect(instance.mercuryAll()).toEqual(16.67);
    })
    test('past all mercury', () => {
        const instance = new DDday(28, null, 5)
        expect(instance.mercuryAll()).toEqual(95.83);
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


