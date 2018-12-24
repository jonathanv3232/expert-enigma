const PizzaDeliverer = require('../src/pizzaDeliverer');
const assert = require('assert');

describe('Pizza Deliverer Class', () => {
    it('should move to the right house', () => {
        const actual = deliverCoordinates();
        const expected = "4,1";
        assert.equal(actual, expected);
    });
});

function deliverCoordinates() {
    const testInput = '>>vv>^^>^';
    const pizzaDeliverer = new PizzaDeliverer('Carlos');
    testInput.split('').forEach(char => pizzaDeliverer.setPos(char)); 
    return pizzaDeliverer.getDelivered(); 
}


