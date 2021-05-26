var Car = /** @class */ (function () {
    function Car(name, owner, year, isOnRoad) {
        this.name = name;
        this.owner = owner;
        this.year = year;
        this.isOnRoad = isOnRoad;
    }
    Car.prototype.makeNoise = function () {
        return this.name + " vrooom vroooooom";
    };
    Car.prototype.getYear = function () {
        return this.year;
    };
    return Car;
}());
export default Car;
