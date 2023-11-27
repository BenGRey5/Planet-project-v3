export class DDday {
    constructor(age, future, past) {
        if (isNaN(age) || isNaN(future) || isNaN(past)) {
            throw new Error("Invalid input. Please enter numeric values for age, future, and past.");
        }
        this.age = age;
        this.future = future;
        this.past = past;
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
        return parseFloat(((this.future - this.age) / 11.86).toFixed(2));
    }
    mercuryPast() {
        return parseFloat(((this.age - this.past) / 0.24).toFixed(2));
    }
    venusPast() {
        return parseFloat(((this.age - this.past) / 0.62).toFixed(2));
    }
    marsPast() {
        return parseFloat(((this.age - this.past) / 1.88).toFixed(2));
    }
    jupiterPast() {
        return parseFloat(((this.age - this.past) / 11.86).toFixed(2));
    }
    mercuryAll() {
        const positiveDifference = Math.abs(this.future - this.age);
        const result = parseFloat(((positiveDifference - this.past) / 0.24).toFixed(2));
        return result
    }
    venusAll() {
        const positiveDifference = Math.abs(this.future - this.age);
        const result = parseFloat(((positiveDifference - this.past) / 0.62).toFixed(2));
        return result
    }
    marsAll() {
        const positiveDifference = Math.abs(this.future - this.age);
        const result = parseFloat(((positiveDifference - this.past) / 1.88).toFixed(2));
        return result
    }
    jupiterAll() {
        const positiveDifference = Math.abs(this.future - this.age);
        const result = parseFloat(((positiveDifference - this.past) / 11.86).toFixed(2));
        return result
    }

} 