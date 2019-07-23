// JavaScript source code
//ex5-03 전역 실행 컨텍스트의 스코프 체인
/**
 * 1. 참조할 상위 컨텍스트가 없으면 스코프 체인은 자기 자신을 가리킨다.
 * */

var var1 = 1;
var var2 = 2;
console.log(var1);  //출력값 1
console.log(var2);  //출력값 2