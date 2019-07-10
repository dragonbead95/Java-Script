// JavaScript source code
//ex3-12 객체 생성 및 출력

/*
1. 자바스크립트의 모든 객체는 자신의 부모 역할을 하는 객체와 연결되어 있다.
2. 자바스크립트에서는 이러한 부모 객체를 프로토타입 객체(짧게는 프로토타입)라고 부른다.
3. 자바스크립트의 모든 객체는 자신의 프로토타입을 가리키는 [[Prototype]]라는 숨겨진 프로퍼티를
가진다고 설명하고 있다.
4. 객체 리터럴 방식으로 생성된 경우 Object.prototype 객체가 프로토타입 객체가 된다는 것만을 기억하자
*/
var foo = {
    name: 'foo',
    age: 30
};

console.log(foo.toString());
console.dir(foo);