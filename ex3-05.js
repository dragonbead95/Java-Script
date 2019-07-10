// JavaScript source code
//ex3-5 Object() 생성자 함수를 통한 겍체 생성

/*
 1. 자바스크립트에서는 객체를 생성할때, 내장 Object()생성자 함수를 제공한다.
 2. Object() 생성자 함수를 이용해서 foo라는 빈 객체를 생성한 후, 몇가지 프로퍼티(name,age,gender)
 들을 추가한다.
 */

//object()를 이용해서 foo 빈 객체를 생성
var foo = new Object();

//foo 객체 프로퍼티 생성
foo.name = 'foo';
foo.age = 30;
foo.gender = 'male';

console.log(typeof foo); //출력값 object
console.log(foo);   //출력값 {name:'foo', age:30, gender:'male'}

console.log(typeof foo.name);   //출력값 string
console.log(typeof foo.age);    //출력값 number
console.log(typeof foo.gender); //출력값 string

