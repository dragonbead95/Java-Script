// JavaScript source code
//ex5-07 클로저의 개념

/**
 * 1. 이미 생명 주기가 끝난 외부 함수의 변수를 참조하는 함수를 클로저라고 한다.
 * 2. x와 같은 변수를 자유변수라고 한다.
 * */

function outerFunc() {
    var x = 10; 
    var innerFunc = function () { console.log(x) }; //이것을 클로저라고 한다.
    //x는 자유변수라고 한다.
    return innerFunc;   
}

var inner = outerFunc();
inner();