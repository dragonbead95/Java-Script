// JavaScript source code
//ex4-31 apply()메서드를 이용한 명시적인 this바인딩

/**
 * 1. this를 특정 객체에 명시적으로 바인딩시키는 방법도 제공한다.
 * 2. 명시적인 바인딩 시키는 방법으로 apply()와 call() 메서드다.
 * 3. function.apply(thisArg, argArray);
 *  - thisArg는 함수 내부에서 사용한 this에 바인딩할 객체를 가리킨다.
 *  - argArray 인자는 함수를 호출할때 넘길 인자들의 배열을 가리킨다.
 */

//생성자 함수
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

//foo 빈 객체 생성
var foo = {};

//apply()메서드 호출
Person.apply(foo, ['foo', '30', 'man']);
console.dir(foo);
