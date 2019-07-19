// JavaScript source code
//ex4-36 생성자 함수에서 명시적으로 기본 타입(불린,숫자,문자열) 값을 리턴했을경우

/**
 * 1. 생성자 함수의 리턴값으로 넘긴 값이 객체가 아닌 불린, 숫자, 문자열의 경우는
 * 이러한 리턴값을 무시하고 this로 바인딩된 객체가 리턴된다.
 */

function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;

    return 100;
}

var result = new Person('foo', 20, 'man');
console.log(result);