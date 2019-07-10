// JavaScript source code
//ex4-14 함수 객체와 프로토타입 객체와의 관계를 보여주는 코드

/**
 * 1. 모든 객체에 있는 내부 프로퍼티인 [[Prototype]]는 객체 입장에서 자신의 부모 역할을 하는
 * 프로토타입 객체를 가리킨다.
 * 
 * 2. 함수 객체가 가지는 prototype 프로퍼티는 이 함수가 생성자로 사용될 때 이 함수를 통해
 * 생성된 객체의 부모 역할을 하는 프로토타입 객체를 가리킨다.
 * 
 * 3. prototype 프로퍼티는 함수가 생성될 때 만들어지며, 다음 그림과 같이 단지 constructor
 * 프로퍼티 하나만 있는 객체를 가리킨다.
 * 
 * 4. prototype 프로퍼티가 가리키는 프로토타입 객체의 유일한 constructor 프로퍼티는 자신과
 * 연결된 함수를 가리킨다. 즉, 자바스크립트에서는 함수를 생성할때, 함수 자신과 연결된 프로토
 * 타입 객체를 동시에 생성하며, 이둘은 다음 그림처럼 각각 prototype과 constructor라는 프로퍼티
 * 로 서로를 참조하게 된다.
 * */

//MyFunction() 함수 정의
/*우선 myFunction()이라는 함수를 생성했다. 함수가 생성됨과 동시에 myFunction() 함수의 
prototype 프로퍼티에는 이 함수와 연결된 프로토 타입 객체가 생성된다. ->(constructor 프로토
타입 객체와 Object.prototype 객체)
*/
function myFunction() {
    return true;
}

/*
 * myFunction.prototype은 myFunction() 함수의 프로토타입 객체를 의미한다.
 * myFunction.prototype 객체는 constructor와 _proto_라는 두 개의 프로퍼티가 있다. 앞서
 * 설명했듯이 이 객체는 myFunction() 함수의 프로토타입 객체이므로 constructor 프로퍼티가
 * 있음을 확인할 수 있다.
 * 또한, 프로토타입 객체 역시 자바스크립트 객체이므로 예외 없이 자신의 부모 역할을 하는
 * _proto_ 프로퍼티가 있다.
 */
console.dir(myFunction.prototype);
console.dir(myFunction.prototype.constructor);