class PizzaDeliverer {
    constructor(employeeName) {
        this.employeeName = employeeName;
        this.x = 0;
        this.y = 0;
    }

   setPos(char) {
        if (char == ">") {
            this.x++;
        } else if (char == "^") {
            this.y++;
        } else if (char == "v") {
            this.y--;
        } else if(char == "<") { 
            this.x--;
        }

       return this.getDelivered();
    }

    getDelivered() {
        return `${this.x},${this.y}`;
    }
    
    getEmployeeName() {
        return this.employeeName;
    }
}

module.exports = PizzaDeliverer
