// JavaScript source code
//ex3-10 기본타입과 참조 타입의 비교 연산

/*
    1. 동등연산자(==)를 사용할때 객체끼리 비교하면 객체가 가리키는 참조값을 비교한다.
*/
var a = 100;
var b = 100;

var objA = { value: 100 };
var objB = { value: 100 };
var objC = objB;

//변수 a와 b는 값을 비교해서 true이다.
console.log(a == b);    // 출력값 true

//objA와 objB는 객체의 프로퍼티를 비교하는 것이 아닌 가리키는 참조값을 비교한다.
console.log(objA == objB);  //출력값 false

//objB와 objC는 가리키는 참조값이 같기 때문에 true가 나온다.
console.log(objB == objC);  //출력값 true