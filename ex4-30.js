// JavaScript source code
//ex4-30 new를 붙이지 않고 생성자 함수 호출 시의 오류

/**
 * 1. new를 붙여서 호출하면 생성자 함수이며, new를 붙이지 않으면 일반함수이다.
 * 
 * 2. 일반함수와 생성자 함수의 this 바인딩이 다르다.
 * 
 * 3. 일반 함수 호출의 경우는 this가 window 전역 객체에 바인딩되는 방면에,
 *  생성자 함수 호출의 경우 this는 새로 생성되는 빈 객체에 바인딩되기 때문이다.
 * */

var qux = Person('qux', 20, 'man');
console.log(qux);               //출력값 undefined

console.log(window.name);       //출력값 qux
console.log(window.age);        //출력값 20
console.log(window.gender);     //출력값 man