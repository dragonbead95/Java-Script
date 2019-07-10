// JavaScript source code
//ex4-1 add()함수 생성(함수 선언문 방식)
/*
 * 1. 함수 선언문 방식으로 정의된 함수의 경우는 반드시 함수명이 정의되어 있어야 한다.
 * 2. C/C++과 유사하지만 function이라는 키워드를 사용하고 리턴값과 매개변수로 넘기는 값에
 * 변수타입(int,char) 등을 기술하지 않는다는 점에서 차이가 있다.
*/
//add()함수 선언문
function add(x, y) {
    return x + y;
}
console.log(add(3, 4)); //출력값 7
