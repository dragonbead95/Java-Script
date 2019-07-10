// JavaScript source code
//ex4-12 add()함수 객체 프로퍼티를 출력하는 코드

/**
 * 1. 일반 객체와는 다르게 추가로 함수 객체만의 표준 프로퍼티가 정의되어 있다.
 * 2. 모든 함수가 length와 prototype 프로퍼티를 가져야 한다고 기술하고있다.
 * 3. name프로퍼티는 함수의 이름을 나타낸다.
 *      caller 프로퍼티는 자신을 호출한 함수를 나타낸다.
 *      arguments 프로퍼티는 함수를 호출할 때 전달된 인자값을 나타낸다.
 *      
 *  4. add() 함수의 프로토타입 객체를 Function.prototype 객체라고 하며, 이것 역시 함수 객체이다.
 *  
 *  5. Function.prototype 함수 객체의 부모는 Object.prototype 객체이다.
 *  
 *  6. Function.prototype 함수 객체는 모든 함수들의 부모 역할을 하는 프로토타입 객체이다.
 *  
 *  7. Function.prototype 객체를 크롬 브라우저에서는 Empty()함수로 명하고 있으며 
 *  Empty()함수가 가지고 있는 프로퍼티나 메서드의 일부는 다음과 같다.
 *  
 *   - constructor 프로퍼티
 *   - toString() 메서드
 *   - apply(thisArg, argArray) 메서드
 *   - call(thisArg,[,arg1[,arg2,]]) 메서드
 *   - bind(thisArg,[,arg1[,arg2,]]) 메서드
 *   등등
 */

function add(x, y) {
    return x + y;
}

console.dir(add);