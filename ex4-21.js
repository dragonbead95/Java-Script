// JavaScript source code
//ex4-21 함수 형식에 맞춰 인자를 넘기지 않더라도 함수 호출이 가능함을 나타내는 예제코드

/**
 * 1. 자바스크립트에서는 함수를 호출할때 함수 형식에 맞춰 인자를 넘기지 않더라도
 * 에러가 발생하지 않는다.
 * 
 * 2. func(), func(1) 호출처럼 정의된 함수의 인자보다 적게 함수를 호출했을 경우,
 * 넘겨지지 않은 인자에는 undefined 값이 할당된다.
 * 
 * 3. 인자 개수보다 많게 함수를 호출했을 경우는 에러가 발생하지 않고, 초과된 인수는 무시된다.
 */

function func(arg1, arg2) {
    console.log(arg1, arg2);
}


func();             //출력값 undefined undefined
func(1);            //출력값 1 undefined
func(1, 2);         //출력값 1 2
func(1, 2, 3);      //출력값 1 2

