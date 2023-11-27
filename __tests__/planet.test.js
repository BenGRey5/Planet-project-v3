import { DDday } from "../src/DDday.js";


describe('DDday', () => {
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
    test('future all venus', () => {
        const instance = new DDday(3, 7, 0)
        expect(instance.venusAll()).toEqual(6.45);
    })
    test('past all venus', () => {
        const instance = new DDday(28, null, 5)
        expect(instance.venusAll()).toEqual(37.1);
    })
    test('future all mars', () => {
        const instance = new DDday(3, 7, 0)
        expect(instance.marsAll()).toEqual(2.13);
    })
    test('past all mars', () => {
        const instance = new DDday(28, null, 5)
        expect(instance.marsAll()).toEqual(12.23);
    })
    test('future all jupiter', () => {
        const instance = new DDday(3, 7, 0)
        expect(instance.jupiterAll()).toEqual(.34);
    })
    test('past all jupiter', () => {
        const instance = new DDday(28, null, 5)
        expect(instance.jupiterAll()).toEqual(1.94);
    })





