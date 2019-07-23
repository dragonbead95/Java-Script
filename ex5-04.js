// JavaScript source code
//ex5-04 함수를 호출한 경우 생성되는 실행 컨텍스트의 스코프 체인

/**
 * 1. 전역실행 컨텍스트의 변수 객체에는 var1, var2, func, this가 생성된다.
 *  이때 scopre는 전역객체를 참조한다.
 * 2. func가 실행되면 func 실행 컨텍스트의 변수 객체에는 var1, var2, this가 생성된다.
 * 이때 func실행 컨텍스트의 [[scope]]는 func변수 객체를 먼저 탐색하고 전역객체를 그 다음으로 탐색한다.
 * 
 * 3. 스코프체인에 대한 정리
 *  - 각 함수 객체는 [[scope]] 프로퍼티로 현재 컨텍스트의 스코프 체인을 참조한다.
 *  - 한 함수가 실행되면 새로운 실행 컨텍스트가 만들어지는데, 이 새로운 실행 컨텍스트는 자신이 사용할 스코프 체인을 다음과 같은 방법으로 만든다. 현재 실행되는 함수 객체의 [[scope]] 프로퍼티를 복사하고, 새롭게 생성된 변수 객체를 해당 체인의 제일 앞에 추가한다.
 *  -스포크페인=현재실행컨텍스트의 변수객체 + 상위 컨텍스트의 스코프체인
 * */

var var1 = 1;
var var2 = 2;

function func() {
    var var1 = 10;
    var var2 = 20;
    console.log(var1);
    console.log(var2);
}
func();
console.log(var1);
console.log(var2);

console.dir(this);