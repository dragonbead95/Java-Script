// JavaScript source code
//ex4-35 생성자 함수에서 명시적으로 객체를 리턴했을 경우

/**
 * 1. 생성자 함수에서 리턴값을 지정하지 않을 경우 생성된 객체가 리턴된다.
 * 2. 객체 리터럴 방식의 특정 객체를 지정한 경우 new 연산자로 생성자 함수를
 * 호출해서 새로운 객체를 생성하더라도, 리턴값에서 명시적으로 넘긴 객체나 배열이
 * 리턴된다.
 */

//Person() 생성자 함수
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;

    //명시적으로 다른 객체 반환
    return { name: 'bar', age: 20, gender: 'woman' };
}

var result = new Person('foo', 30, 'man');
console.log(result);