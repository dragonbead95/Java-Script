// JavaScript source code
//ex4-11 함수를 다른 함수의 리턴값으로 활용한 코드

/**
 * 1. 함수는 다른 함수의 리턴값으로도 활용할 수 있다.
 * 2. foo()함수는 console.log()를 이용해 출력하는 간단한 익명함수를 리턴하는 역할을 한다.
 * 이것은 함수자체가 값으로 취급되기 때문이다.
 * */

//함수를 리턴하는 foo() 함수 정의
var foo = function () {
    return function () {    //여기서 함수 자체가 값으로 취급되어 리턴된다.
        console.log('this function is the return value');
    };
};

var bar = foo();
bar();