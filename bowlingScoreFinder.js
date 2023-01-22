const totalPins = 10;
const totalFrame = 10;
const throwsPerFrame = 2;

let findScore = (rolls) => {
    let score = 0;
    var frameCount = 0;
    var index = 0;
    const result = rolls.reduce((frame, currentValue) => {
        console.log(frame);
        console.log('index' + index);
        console.log('frame count' + frameCount);

        if (frameCount == totalFrame && index < rolls.length - 2) {
            throw new Error();
        }
        if (index <= rolls.length - 1) {
            if (currentValue == totalPins) {
                let tempFrame = [];
                tempFrame.push(totalPins);
                tempFrame.push(rolls[index]);
                tempFrame.push(rolls[index + 1]);
                frame.push(tempFrame);
                console.log('fc' + frameCount);
                console.log(tempFrame);
                score += currentValue + rolls[index] + rolls[index + 1];
                frameCount++;
                index++;
                if (index == rolls.length - 2) {
                    index += 2;
                }
                return frame;


            }
            if (frame.length == 0) {
                let tempFrame = [];
                tempFrame.push(currentValue);
                frame.push(tempFrame);
                score += currentValue;
                console.log(frame);
                index++;
                frameCount++;
                return frame;
            }
            else if (frame[frame.length - 1].length == throwsPerFrame || frame[frame.length - 1].length == throwsPerFrame + 1) {
                let tempFrame = [];
                tempFrame.push(currentValue);
                console.log(tempFrame);
                frame.push(tempFrame);
                console.log(frame);
                score += currentValue;
                index++;
                frameCount++;
                console.log(frameCount);
                return frame;
            }
            else if (frame[frame.length - 1].length >= 0 && frame[frame.length - 1].length < throwsPerFrame) {
                frame[frame.length - 1].push(currentValue);
                score += currentValue;
                if (frame[frame.length - 1][0] + currentValue == totalPins) {
                    frame[frame.length - 1].push(rolls[index + 1]);
                    score += rolls[index + 1];
                    console.log('#');
                    console.log(index);
                    if (index == rolls.length - 2) {
                        index += 1;
                    }
                }
                index++;
                return frame;
            }
        }
    }, []);
    if (typeof (result) != 'undefined') {
        console.log(result.length);
    }
    if (frameCount != totalFrame) {
        throw new Error();
    }


    return score;
};
let result = findScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 7, 1]);
console.log(result);
result = findScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]);
console.log(result);
result = findScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]);
console.log(result);
module.exports = { findScore };
