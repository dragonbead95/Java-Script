// JavaScript source code
//ex4-05 Function() 생성자 함수를 이용한 add()함수 생성

/**
 * 1. new Function(arg1, arg2, ... argN,functionBody)
 * 
 * arg1, arg2, argN - 함수의 매개변수
 * functionBody - 함수가 호출될 때 실행될 코드를 포함한 문자열
 * 
 * 2. Function() 생성자 함수를 사용한 함수 생성 방법은 자주 사용되지는 않는다.
 * 상식 수준에서만 알면 좋다.
 * */

var add = new Function('x', 'y', 'return x+y');
console.log(add(3, 4)); //출력값 7


