function checkVariableScope() {
    "use strict";

    let i = "function variable";

    if (true) {
        let i = "block variable";
        console.log("Scope i is: ", i);
    }
    
    console.log("Scope i is: ", i);
    
    return i;
}

checkVariableScope();

module.exports = checkVariableScope;