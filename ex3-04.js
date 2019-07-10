// JavaScript source code
//ex3-4 null 타입 변수 체크

/*
 1. 자바스크리비트 환경 내에서 기본적으로 값이 할당되지 않은 변수는 undefined 타입이다.
 2. null타입 변수의 경우는 개발자가 명시적으로 값이 비어있음을 나타내는데 사용한다.
 3. null타입 변수인지를 확인할때 typeof 연산자를 사용하면 안되고,
 일치 연산자(===)를 사용해서 변수의 값을 직접 확인해야 한다.
 */

//null타입 변수 생성
var nullVar = null;

console.log(typeof nullVar === null);   //출력값 false
console.log(nullVar === null);          //출력값 true

