const milili = [10, 25, 4];

function myArr(mili) {
    "use strict";

    mili = [4, 10, 25];
    milili[0] = mili[0];
    milili[1] = mili[1];
    milili[2] = mili[2];

    return mili;
}

console.log(myArr(milili));

module.exports = myArr;