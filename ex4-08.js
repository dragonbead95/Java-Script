// JavaScript source code
//ex4-08 add()함수도 객체처럼 프로퍼티를 가질 수 있다.

/**
 * 1. 자바스크립에서는 함수도 객체이다.
 * 2. 함수 자체가 일반 객체처럼 프로퍼티들을 가질 수 있다.
 */

//함수 선언 방식으로 add()함수 정의
function add(x, y) {
    return x + y;
}

//add() 함수 객체에 result, status 프로퍼티 추가
add.result = add(3, 2);
add.status = 'OK';

console.log(add.result);    //출력값 5
console.log(add.status);    //출력값 OK