// JavaScript source code
//ex3-1 자바스크립트 기본타입

/*
 1.자바스크립트는 느슨한 타입 체크 언어이다.
 2.자바스크립트에서는 변수를 선언할때 타입을 미리 선언하지 않고,
 var이라는 한가지 키워드로만 변수를 선언한다.
 3. 변수에 어떤 형태의 데이터를 저장하느냐에 따라 해당 변수의 타입이 결정된다.
 */

//숫자타입
var intNum = 10;
var floatNum = 0.1;

//문자열타입
var singleQuoteStr = 'single quote string';
var doubleQutoeStr = "double quote string";
var singleChar = 'a';

//불린타입
var boolVar = true;

//undefined 타입
var emptyVar;

//null타입
var nullVar = null;

console.log(typeof intNum,
    typeof floatNum,
    typeof singleQuoteStr,
    typeof doubleQutoeStr,
    typeof boolVar,
    typeof nullVar,
    typeof emptyVar)