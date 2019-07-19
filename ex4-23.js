// JavaScript source code
//ex4-23 메서드 호출 사용시 this 바인딩

/*
 * 1. this는 자신을 호출한 객체에 바인딩된다.
 * 2. myObject.sayName()에서 this는 myObject를 가리킨다.
 */

//myObject 객체 생성
var myObject = {
    name: 'foo',
    sayName: function () {
        console.log(this.name);
    }
};

//otherObject 객체 생성
var otherObject = {
    name: 'bar'
};

//otherObject.sayName()메서드
otherObject.sayName = myObject.sayName;

//sayName()메서드 호출
myObject.sayName();
otherObject.sayName();
