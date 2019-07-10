// JavaScript source code
//ex3-18 배열과 객체의 유사점과 차이점

/*
 1.객체의 프로퍼티를 접근할 때  대괄호 안에 접근하려는 
 프로퍼티의 속성을 문자열 형태로 적어야 한다고 했다.
 colorsObj[0]이 아니라 colorsObj['0']의 형태로 기입하는 것이 맞다.
 하지만 다음 예제에서는 colorsObj[0]의 결과가 'orange'로 정상적인 결과가 출력됬다.
 이유는 자바스크립트 엔진이 []연산자 내에 숫자가 사용될 경우, 해당 숫자를
 자동으로 문자열 형태로 바꿔주기 때문이다.

2. 배열과 객체 모두 object이다.

3. 객체는 length 프로퍼티를 가지고 있지 않다.

4. 객체는 push() 메서드를 사용할 수 없다.

5. 객체의 프로토타입은 Object.prototype이다. 배열의 경우 Array.prototype 객체이다.
그래서 push메서드를 사용할수 없다.
객체 -> Object.prototype
배열 -> Array.prototype -> Object.prototype
 */

var colorsArray = ['orange', 'yellow', 'green'];
console.log(colorsArray[0]);    //출력값 orange
console.log(colorsArray[1]);    //출력값 yellow    
console.log(colorsArray[2]);    //출력값 green

//colorsObj
var colorsObj = {
    '0': 'orange',
    '1': 'yellow',
    '2': 'green'
};

console.log(colorsObj[0]);  //출력값 orange
console.log(colorsObj[1]);  //출력값 yellow
console.log(colorsObj[2]);  //출력값 green

//typeof 연산자 비교
console.log(typeof colorsArray);    //출력값 object (not array)
console.log(typeof colorsObj);      //출력값 object

//length 프로퍼티
console.log(colorsArray.length);    //출력값 3
console.log(colorsobj.length);      //출력값 undefined

//배열 표준 메서드
colorsArray.push('red');    //['ornage','yellow','green','red]
colorsObj.push('red');      //Uncaught TypeError: object #<Object> has no method 'push'



