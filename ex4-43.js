// JavaScript source code
//ex4-43 프로토타입 객체 변경

/**
 * 1. 자바스크립트에서는 이렇게 함수를 생성할때 해당 함수와 연결되는 디폴트 프로토타입 객체를 다른 일반 객체로 변강하는 것이 가능하다.
 * 
 * 2. 주의할점
 * 생성자 함수의 프로토타입 객체가 변경되면, 변경된 시점 이후에 생성된 객체들은 변경된 프로토타입 객체로 __proto__ 링크를 연결한다는 점을 기억해야 한다. 이에 반해 생성자 함수의 프로토타입이 변경되기 이전에 생성된 객체들은 기존 프로토타입 객체로의 __proto__링크를 그대로 유지한다.
 */

//Person() 생성자 함수
function Person(name) {
    this.name = name;
}

console.log(Person.prototype.constructor);

//foo객체생성
var foo = new Person('foo');
console.log(foo.country);

//디폴트 프로토타입 객체 변경
Person.prototype = {
    country: 'korea',
};

//Person.prototype 객체에서 constructor 프로퍼티가 없기 때문에 __proto__ 프로토타입 링크를 통해서 Object.prototype객체의 constructor를 참조해서 Object()가 나온다.
console.log(Person.prototype.constructor);

//bar객체 생성
var bar = new Person('bar');
console.log(foo.country);   //이전과 연결된 프로토타입객체를 참조한다.
                            //디폴트 프로토타입 객체에는 country 프로퍼티가 없다.
console.log(bar.country);
console.log(foo.constructor);
console.log(bar.constructor);   //bar객체에는 constructor가 없으므로 프로토타입링크를 통해서 Person.prototype 객체에 접근한다. 그러나 Person.prototype 객체에도 constructor 프로퍼티가 없기 때문에 Person.prototype 객체의 프로토타입 링크를 통해서 Object.prototype 객체의 constructor 프로퍼티를 참조한다.


console.log(bar);