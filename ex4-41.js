// JavaScript source code
//ex4-41 프로토타입 객체의 동적 메서드 생성 예제 코드

/**
 * 1. 프로토타입 객체 역시 자바스크립트 객체이므로 일반 객체처럼 동적으로 프로퍼티를 추가/삭제 하는것이 가능하다.
 * 2. Person.prototype 객체에 동적으로 sayHello() 메서드를 추가한다.
 */

//Person() 생성자 함수
function Person(name) {
    this.name = name;
}

//foo 객체 생성
var foo = new Person('foo');

//foo.sayHello();       //error

//프로토타입 객체에 sayHello() 메서드 정의
Person.prototype.sayHello = function () {
    console.log('Hello');
}

foo.sayHello();
console.dir(Person.prototype);