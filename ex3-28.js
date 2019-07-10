// JavaScript source code
//ex3-28 +연산자 예제

/*
    1. +연산자는 더하기 연산과 문자열 연결 연산을 수행한다.
    2. 두 연산자가 모두 숫자일 경우에만 더하기 연산을 수행하고
    나머지는 문자열 연결 연산이 이루어진다.
*/

var add1 = 1 + 2;
var add2 = 'my ' + 'string';
var add3 = 1 + 'string';
var add4 = 'string' + 2;

console.log(add1);  //출력값 3
console.log(add2);  //출력값 my string
console.log(add3);  //출력값 1string
console.log(add4);  //출력값 string2

console.log(typeof add3);