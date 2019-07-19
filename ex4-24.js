// JavaScript source code
//ex4-24 전역 객체와 전역 변수의 관계를 보여주는 예제 코드

/**
 * 1. 모든 전역 변수는 window 전역 객체의 속성들이다.
 * */

var foo = "I'm foo";

console.log(foo);   //출력값 I'm foo
console.log(window.foo);    //출력값 I'm foo
console.log(window);