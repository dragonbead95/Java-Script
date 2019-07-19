// JavaScript source code
//ex4-44 프로토타입 체이닝과 동적 프로퍼티 생성

/**
 * 1. 객체에 특정 프로퍼티를 읽으려고 할때, 프로퍼티가 해당 객체에 없는 경우 프로토타입 체이닝이 발생한다.
 * 
 * 2. 반대로 객체에 있는 특정 프로퍼티에 값을 쓰려고 한다면 이때는 프로토타입 체이닝이 일어나지 않는다. 왜냐하면 자바스크립트는 객체에 없는 프로퍼티에 값을 쓰려고 할 경우 동적으로 객체에 프로퍼티를 추가하기 때문이다.
 */

//Person() 생성자 함수
function Person(name) {
    this.name = name;
}

Person.prototype.country = 'Korea';

var foo = new Person('foo');
var bar = new Person('bar');
console.log(foo.country);
console.log(bar.country);
foo.country = 'USA';    //foo 객체에 동적으로 생성된다.
                        //foo객체에는 country 프로퍼티가 생겨나고
                        //bar객체에는 country 프로퍼티가 없어서 Person.prototype 객체에 있는 country 프로퍼티를 참조한다.

console.log(foo.country);
console.log(bar.country);