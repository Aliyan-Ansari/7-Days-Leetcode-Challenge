/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function (plants, capacity) {
    let waterAvailable = capacity;
    let steps = 0;

    plants.forEach((value, index) => {
        if (waterAvailable < value) {
            waterAvailable = capacity;
            steps += index * 2;
        }
        waterAvailable -= value;
        steps++
    });

    return steps;
};