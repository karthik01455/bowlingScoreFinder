const {findScore} = require('./bowlingScoreFinder');
describe('Bowling',()=>{
    describe('Finding Bowling score',()=>{
       /* it('Should throw error when rolls is not list',()=>{
            expect(findScore(2)).toThrow(Error);
                 
        });*/
        /* it('Should throw error when rolls is not a list on numbers',()=>{
        expect(findScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, a)).toThrow(Error);
             
    });*/
        it('Should throw error when frame size is less than 10 for the rolls',()=>{
            expect(findScore([3, 6, 3, 6, 3, 6, 3])).toThrow(Error);
                 
        });
        it('Should throw error when frame size is greater than 10 for the rolls',()=>{
            expect(findScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toThrow(Error);
                 
        });
        it('Should find score for rolls whose frame size is 10',()=>{
            const result= findScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]);
            expect(result).toEqual(90);
                 
        });
        it('Should find score when last frame is strike and extra 2 throws are given',()=>{
            const result= findScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]);
            expect(result).toEqual(30);
                 
        });
        it('Should find score when last frame is spare and extra 1 throw is given ',()=>{
            const result= findScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 7, 1]);
            expect(result).toEqual(11);
                 
        });
    });
});

