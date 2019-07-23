// JavaScript source code
//ex5-13

function calllater(obj, a, b) {
    return (function () {
        obj["sum"] = a + b;
        console.log(obj["sum"]);
    });
}

var sumObj = {
    sum: 0
}

var func = calllater(sumObj, 1, 2);
setTimeout(func, 500);