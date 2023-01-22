const totalPins = 10;
const totalFrame = 10;
const throws = 2;

let findScore = (rolls) => {
    return 1;
};
let result = findScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 7, 1]);
console.log(result);
result = findScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]);
console.log(result);
result = findScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]);
console.log(result);
module.exports = { findScore };
