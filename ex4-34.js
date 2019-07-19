// JavaScript source code
//ex4-34 return 문이 없는 일반 함수의 리턴값 확인

/**
 * 1. 일반함수난 메서드는 리턴값을 지정하지 않을 경우, undefined 값이 리턴된다.
 * */

//noReturnFunc() 함수
var noReturnFunc = function () {
    console.log('This function has no return statement');
}

var result = noReturnFunc();
console.log(result);