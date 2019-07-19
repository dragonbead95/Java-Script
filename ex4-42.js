// JavaScript source code
//ex4-42 프로토타입 메서드와 this 바인딩

/**
 * 1.foo.getName()을 실행할때 foo객체에는 getName()메서드가 없으므로 프로토타입 링크를 통해서 Person.prototye 객체에 접근한다. Person.prototype 객체에는 getName()메서드가 있으므로 실행시킨다. getName()안에 this는 자신을 호출한 객체에 바인딩된다. 여기서는 foo 객체로 바인딩된다.
 * 
 * 2. 만약 Person.prototype 객체에 name 프로퍼티가 있고 Person.prototype.getName()을 실행할때 자신을 실행한 객체인 Person.prototype으로 this가 바인딩된다. 그래서 Person.prototype 객체 안에 있는 name프로퍼티를 참조하게 된다.
 */

//Person() 생성자 함수
function Person(name) {
    this.name = name;
}

//getName() 프로토타입 메서드
Person.prototype.getName = function () {
    return this.name;
};

//foo객체 생성
var foo = new Person('foo');

console.log(foo.getName()); //출력값 foo

//Person.prototype 객체에 name 프로퍼티 동적 추가
Person.prototype.name = 'person';

console.log(Person.prototype.getName());    //Person 출력
