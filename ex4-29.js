// JavaScript source code
//ex4-29 객체 생성 두가지 방법(객체리터럴 vs 생성자 함수)

/**
 * 1. 객체 리터럴 방식과 생성자 함수 방식의 차이는 프로토타입 객체에 있다.
 * 
 * 2. 객체 리터럴 방식의 경우는 자신의 프로토타입 객체가 Object(실제로는 Object.prototype이다)
 * 
 * 3. 생성자 함수 방식의 경우는 Person(실제로는 Person.prototype)으로 서로 다르다.
 * 
 * 4. 자바스크립트 객체는 자신을 생성한 생성자 함수의 prototype 프로퍼티가 가리키는 객체를 자신의 프로토타입 객체로 설정한다. 객체 리터럴 방식에서는 객체 생성자 함수는 Object()이며,
 * 생성자 함수 방식의 경우는 생성자 함수 자체이다.
 * */

//객체 리터럴 방식으로 foo 객체 생성
var foo = {
    name: 'foo',
    age: 35,
    gender: 'man'
};

console.dir(foo);

//생성자 함수
function Person(name, age, gender, position) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.position = position;
}

//Person 생성자 함수를 이용해 bar 객체, baz 객체 생성
var bar = new Person('bar', 33, 'woman');
console.dir(bar);

var baz = new Person('baz', 25, 'woman');
console.dir(baz);