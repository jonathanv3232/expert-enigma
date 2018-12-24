const fs = require('fs');
const file = fs.createReadStream("input.txt", {encoding: "utf-8"});

const PizzaShop = require('./src/pizzaShop');
const { checkInput } = require('./utils/validation');

// instantiate the pizzaShop with its employees
const maria = new PizzaShop(['Maria']); 
const mariaClovis = new PizzaShop(['Maria', 'Clovis']);

let read = true;
file.on('readable', () => {
    let char;
    if(read) {
        while ( (char = file.read(1)) !== null) {
                charRead(char); 
        }
        // finished reading 
        read = false;

        printSolutions();
    }
});

function charRead(char) {
    // Will validate input
    checkInput(char);

    if(char != ' ' && char != '\n' && char != '\t') {
        maria.goToHouse(char);
        mariaClovis.goToHouse(char);
    }
}

function printSolutions() {
    maria.prettyPrint();
    mariaClovis.prettyPrint();
}


