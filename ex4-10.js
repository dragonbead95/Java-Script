// JavaScript source code
//ex4-10 함수를 다른 함수의 인자로 넘긴 코드

/**
 * 1. 함수는 다른 함수의 인자로도 전달이 가능하다.
 */

//함수 표현식으로 foo() 함수 생성
var foo = function (func) {
    func();
}

//foo() 함수 실행
foo(function () { console.log('Function can be used as the argument.'); });
