// JavaScript source code
//ex3-19 배열의 프로토타입과 객체의 프로토타입 비교

/*
 1. emptyArray의 프로토타입은 Array.prototype객체를 가리킨다.
 2. emptyObj의 프로토타입은 Object.prototype객체를 가리킨다.
 */
var emptyArray = [];    //배열 리터럴을 통한 빈 배열 생성
var emptyObj = {};      //객체 리터럴을 통한 빈 객체 생성

console.log(emptyArray);    //배열의 프로토타입(Array.prototype) 출력
console.log(emptyObj);      //객체의 프로토타입(Object.prototype) 출력
