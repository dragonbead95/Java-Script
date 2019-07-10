// JavaScript source code
//ex3-2 자바스크립트 나눗셈 연산

/*
1.자바 스크립트에서는 모든 숫자를 실수로 처리하므로
    나눗셈 연산을 5/2을 할때 2가 아니라 2.5로 출력된다.
2. c언어에서처럼 정수만 출력되게 만들고 싶다면
Math.floor() 함수를 사용하면 된다.
*/

var num = 5 / 2;

console.log(num);   //(출력값)2.5
console.log(Math.floor(num));   //출력값 2

