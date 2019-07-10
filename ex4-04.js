// JavaScript source code
//ex4-04 함수 표현식 방식으로 구현한 팩토리얼 함수

/**
 * 1. 함수 외부에서는 함수 변수 factorialVar로 함수를 호출했으며, 함수 내부에서 이뤄지는
 * 재귀 호출은 factorial() 함수 이름을 처리한다는 것을 알 수 있다.
 * 
 */

var factorialVar = function factorial(n) {
    if (n <= 1)
        return 1;
    return n * factorial(n - 1);
};

console.log(factorialVar(3));   //출력값 6
console.log(factorial(3));  //출력값 factorial is not defined;


////////////////////////////////////////////////////////////////////////
//function statement와 function expression에서의 세미콜론
/* 
 * 1. 일반적으로 자바스크립트 코드를 작성할 때 함수 선언문 방식으로 선언된 함수의 경우는
 * 함수 끝에 세미콜론(;)을 붙이지 않지만, 함수 표현식 방식의 경우는 세미콜론(;)을 붙이는
 * 것을 권장한다.
 * 정리 : 함수 선언문 방식의 함수는 끝에 세미콜론(;)를 안붙인다.
 *          함수 표현식 방식의 함수는 끝에 세미콜론(;)를 붙인다.
 * 
 * 함수 표현식에서 세미콜론을 사용하지 않을때 예시
 * var func = function(){
 *  return 42;
 * }    //세미콜론을 사용하지 않음
 * (function(){
 *  console.log("function called");
 * })();
 * 
 * func()함수의 정의에서 세미콜론을 사용하지 않아, return 42; 문장을 지나 func()의 함수 정의
 * 끝에 있는 중괄호(})만으로 func()함수가 끝났다고 판단하지 않기 때문이다. 그리고 자바스크립트
 * 파서는 이후에 괄호에 둘러싸여 정의된 즉시 실행 함수를 보고 이를 마치 func() 함수 호출 연산으로
 * 생각해서 func() 함수를 호출해 버린다. 그렇기 때문에 func()함수가 호출되면 42가 반환되고,
 * 즉시 실행 함수를 실행하려고 남겨둔 마지막 괄호가 있으므로 42(); 형태로 또다시 함수를
 * 호출하려고 시도한다. 그러나 42는 숫자이지 함수가 아니므로 "number is not a function"에러가
 * 발생한다.
 */