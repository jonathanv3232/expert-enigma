const assert = require('assert');
const PizzaShop = require('../src/pizzaShop');

describe('Pizza Shop should output houses with a pizza', function () {
    it('Should output the right number of houses with pizzas from One Employee', () => {
        const actual = pizzasDelivered(['Maria']);
        const expected = 14;

        assert.equal(actual, expected);
    });

    it('Should output the right number of houses with pizzas from Two Employee', () => {
        const actual = pizzasDelivered(['Maria', 'Clovis']);
        const expected = 10;

        assert.equal(actual, expected);
    });

    it('Should output the right number of houses with pizzas from Three Employee', () => {
        const actual = pizzasDelivered(['Maria', 'Clovis', 'Carlos']);
        const expected = 9;

        assert.equal(actual, expected);
    });
});

describe("Test for repeated houses", () => {
    it("Should output right number of repeated houses for One Employee", () => {
        const actual = repeatPizzasDelivery(["Maria"], ">>><<<^^>");
        const expected = 3;

        assert.equal(actual, expected);
    });

    it("Should output right number of repeated houses for Two Employees", () => {
        const actual = repeatPizzasDelivery(["Maria", "Clovis"], ">><<^^>>^^");
        const expected = 6;

        assert.equal(actual, expected);
    });
    
    it("Should output right number of repeated houses for Three Employees", () => {
        const actual = repeatPizzasDelivery(["Maria", "Clovis", "Carlos"], ">>>^^^");
        const expected = 4;

        assert.equal(actual, expected);
    });
})

function repeatPizzasDelivery(_employees, _data) {
    const data = _data; 
    const employees = new PizzaShop(_employees);

    data.split('').forEach(pos => employees.goToHouse(pos));
    return employees.getRepeatLocation();
}

function pizzasDelivered(_employees) {
    const data = "^^>^>>vv>^^<^>";
    const employees = new PizzaShop(_employees);

    data.split('').forEach(pos => employees.goToHouse(pos));

    return employees.getPizzasDelivered();
}
