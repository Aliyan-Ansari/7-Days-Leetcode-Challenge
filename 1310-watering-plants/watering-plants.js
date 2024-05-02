/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function(plants, capacity) {
    let waterAvailable = capacity;
    let steps = 0;
    
    for(let i = 0; i < plants.length; i++) {
        
        if (waterAvailable < plants[i]) {
            waterAvailable = capacity;
            steps += i*2;
        }
        
        waterAvailable -= plants[i];
        steps++
    }
    return steps;
};