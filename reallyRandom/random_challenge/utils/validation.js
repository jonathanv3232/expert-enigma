function checkInput(char) {
    const validInput = ['>', '<', 'v', '^', ' ', '\t', '\n'];
    if(!validInput.includes(char)) {
        throw "Invalid Input";
    }
}

module.exports = {
    checkInput,
}
