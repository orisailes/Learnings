class Car {
    constructor(name, owner, year, isOnRoad) {
        this.name = name;
        this.owner = owner;
        this.year = year;
        this.isOnRoad = isOnRoad;
    }
    makeNoise() {
        return `${this.name} makes vrooom vroooooom`;
    }
    getYear() {
        return this.year;
    }
}
export default Car;
