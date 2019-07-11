// JavaScript source code
//ex4-20 자신을 재정의하는 함수 예제 코드

/**
 * 1. 함수를 리턴하는 함수
 * 2. 함수도 일급 객체이므로 일반 값처럼 함수 자체를 리턴할수 있다.
 * */

//self 함수
var self = function () {
    console.log('a');
    return function () {
        console.log('b');
    }
};

self = self();
self();