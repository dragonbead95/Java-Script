// JavaScript source code
//ex4-38 객체 리터럴 방식에서의 프로토타입 체이닝

/**
 * 1. 자바 스크립에서 특정 객체의 프로퍼티나 메서드에 접근하려고 할때,
 * 해당 객체에 접근하려는 프로퍼티 또는 메서드가 없다면 [[prototype]](__proto__)링크를 따라 자신의 부모 역할을 하는 프로토타입 객체의 프로퍼티를 차례대로 검색하는 것을 프로토타입 체이닝이라고 한다.
 * 
 * 2. myObject 객체가 hasOwnProperty() 메서드를 호출할때 에러가 발생하지 않은 이유는 Object.prototype에 메서드가 있었기 때문이다.
 * 
 * 3. 자바스크립트에서 객체는 자기 자신의 프로퍼티뿐만 아니라, 자신의 부모 역할을
 * 하는 프로토타입 객체의 프로퍼티 또한 마치 자신의 것처럼 접근하는게 가능하다.
 * */

var myObject = {
    name: 'foo',
    sayName: function () {
        console.log('My name is ' + this.name);
    }
};

myObject.sayName();
console.log(myObject.hasOwnProperty('name'));
console.log(myObject.hasOwnProperty('nickname'));
myObject.sayNickName();