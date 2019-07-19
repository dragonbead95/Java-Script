// JavaScript source code
//ex4-40 String 기본 타입에 메서드 추가

/**
 * 1. 자바스크립트의 숫자, 문자열, 배열 등에서 사용되는 표준 메서드들의 경우
 * , 이들의 프로토타입인 Number.prototype, String.prototype, Array.prototype 등에 정의 되어 있다.
 * 
 * 2. 이러한 표준 메서드들의 프로토타입들도 마지막엔 Object.prototype으로 연결되어 있다.
 * 
 * 3. 부모 프로토타입 객체에 함수 객체를 동적으로 생성해서 쓸 수 있다.
 * */
String.prototype.testMethod = function () {
    console.log('This is the String.prototype.testMethod()');
};

var str = 'this is test';
str.testMethod();
console.dir(String.prototype);