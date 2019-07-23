// JavaScript source code
//ex5-01

console.log("This is global context");

function ExConText1() {
    console.log("This is ExContext1");
};

function ExConText2() {
    ExConText1();
    console.log("This is ExContext2");
};

ExConText2();