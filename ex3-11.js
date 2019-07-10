// JavaScript source code
//ex3-11 Call by Value와 Call by Reference의 차이

/*
 1. call by value 방식은 기본타입을 인자로 넘길 경우
 값이 복사되어 넘어 가는 경우이다.
 2. call by reference 방식은 객체 타입을 인자로 넘길 경우
 참조값을 복사하여 같은 곳을 가리키게 만드는 방식이다.
 그래서 인자로 넘긴 객체의 프로퍼티 값을 바꿀수 있는것이다.
*/

var a = 100;
var objA = { value: 100 };

function changeArg(num, obj) {
    num = 200;
    obj.value = 200;

    console.log(num);
    console.log(obj.value);
}

changeArg(a, objA);

console.log(a);
console.log(objA);