const pizzaDeliverer = require('./pizzaDeliverer');

class PizzaShop {
    constructor(employees) {
        this.employeeMap = new Map();
        this.employees = employees;
        this.pizzasDelivered = new Set();
        this.pizzasDelivered.add("0,0");
        this.counter = 0;
        this.repeatHouses = 0;

        // Initializes instances of employees
        this.init()
    }

    init() {
        for(let i = 0; i < this.employees.length; i++) {
            this.employeeMap.set(this.employees[i], new pizzaDeliverer(this.employees[i]));
        }
    }

    goToHouse(char) {
        if (this.counter == this.employees.length) {
            this.counter = 0;
        }
        const currEmployee = this.getEmployee(this.employees[this.counter]);
        const homePos = currEmployee.setPos(char);

        if(this.pizzasDelivered.has(homePos)) {
            this.repeatHouses++;
        } else {
            this.pizzasDelivered.add(homePos);
        }

        this.counter++;
    }

    getEmployee(name) {
        return this.employeeMap.get(name);
    }

    getPizzasDelivered() {
        return this.pizzasDelivered.size;
    }
    
    getRepeatLocation() {
        return this.repeatHouses;
    }

    prettyPrint() {
        console.log('-------------- PIZZA DELIVERY REPORT -----------------\n');
        console.log(`${this.employees.toString()} delivered: ${this.pizzasDelivered.size} pizzas`);
        console.log(`${this.employees.toString()} went back to the same house ${this.repeatHouses} times`);
        console.log('------------------------------------------------------');
    }
}

module.exports = PizzaShop
