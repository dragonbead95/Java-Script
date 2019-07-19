// JavaScript source code
//ex4-37 prototype 프로퍼티와 [[Prototype]] 링크 구분

/**
 * 1. 자바스크립트의 모든 객체는 자신의 부모인 프로토타입 객체를
 * 가리키는 참조 링크 형태의 숨격진 프로퍼티가 있다.
 * 이러한 링크를 프로토타입 링크라고 부른다.
 * 구글크롬 기준으로는 __proto__로 표신된다.
 * 
 * 2. Person() 생성자 함수로 생성된 foo객체는 Person() 함수의 프로토타입 객체를
 * __proto__로 연결한다.
 * 
 * 3. 자바스크립트에서 객체를 생성하는건 생성자 함수의 역할이지만, 생성된 객체의
 * 실제 부모 역할을 하는건 생성자 자신이 아닌 생성자의 prototype 프로퍼티가 가리키는
 * 프로토타입 객체이다.
 */

//Person 생성자 함수
function Person(name) {
    this.name = name;
}

//foo 객체 생성
var foo = new Person('foo');

console.dir(Person);
console.dir(foo);