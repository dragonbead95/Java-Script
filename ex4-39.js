// JavaScript source code
//ex4-39 생성자 함수 방식에서의 프로토타입 체이닝

/**
 * 1. 자바스크립트에서 모든 객체는 자신을 생성한 생성자 함수의
 * prototype 프로퍼티가 가리키는 객체를 자신의 프로토타입 객체(부모 객체)로 취급한다.
 * 
 * 2. foo 객체에는 hasOwnProperty() 메서드가 없어서 프로토타입 링크(__proto__)를 통해 자신의 프로토타입 객체(부모 객체)인 Person.prototype 객체에 접근한다. 그런데 Person.prototype 객체도 constructor 프로퍼티 밖에 없어서 Person.prototype이 가지고 있는 프로토타입 링크(__proto__)를 통해서 Object.prototype 객체를 참조한다. 거기에서 hasOwnProperty() 메서드가 있기 때문에 에러가 나지 않을 수 있다.
 * 
 * 3. 자바스크립트에서 Object.prototype 객체는 프로토타입 체이닝의 종점이다.
 */

//Person() 생성자 함수
function Person(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
}

//foo객체 생성
var foo = new Person('foo', 30, 'tennis');

//프로토타입 체이닝
console.log(foo.hasOwnProperty('name'));    //true

//Person.prototype 객체 출력
console.dir(Person.prototype);