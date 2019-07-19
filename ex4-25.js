// JavaScript source code
//ex4-25 함수를 호출할 때 this 바인딩을 보여주는 예제 코드

/**
 * 1. test라는 전역변수를 선언하여 window 전역 객체의 프로퍼티로 접근이 가능하다.
 * 2. sayFoo() 함수에서 this는 전역 객체에 바인딩이 된다. 따라서 window.test를 의미한다.
 * */

var test = 'This is test';
console.log(window.test);

//sayFoo() 함수
var sayFoo = function () {
    console.log(this.test); //sayFoo() 함수 호출시 this는 전역 객체에 바인딩된다.
}

sayFoo();