var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};
logIt();


//from interview cake I learned that hoisting in JavaScript means that the declaration not assignment of variables gets sent to the top of the scope.

//so this would log undefined
