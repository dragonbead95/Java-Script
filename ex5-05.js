// JavaScript source code
//ex5-05

var value = "value1";

function printFunc() {
    var value = "value2";

    function printValue() {
        return value;
    }
    console.log(printValue());
}

printFunc();