// JavaScript source code
// ex3-3 자바스크립트 문자열 예제

/*
1.자바스크립트에서는 한번 생성된 문자열은 읽기만 가능하지 수정은 불가능하다.
*/

//str문자열생성
var str = 'test';
console.log(str[0], str[1], str[2], str[3]);    //출력값 test

//문자열의 첫 글자를 대문자로 변경?
str[0] = 'T';
console.log(str);   //출력값 test



