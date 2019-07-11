// JavaScript source code
//ex4-22 arguments 객체 예제 코드

/**
 * 1. arguments 객체는 유사 배열 객체이다.
 */

//add()함수
function add(a, b) {
    //arguments 객체 출력
    console.dir(arguments);
    return a + b;
}

console.log(add(1));        //출력값 NaN
console.log(add(1, 2));     //출력값 3
console.log(add(1, 2, 3));    //출력값 3

//arguments 객체의 활용
function sum() {
    var result = 0;

    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];

    }
    return result;
}

console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3,4,5,6,7,8,9));