// JavaScript source code
//ex4-19 함수 스코프 외부에서 내부 함수 호출하는 예제코드

/**
 * 1. 내부 함수를 표현식으로 저장하고 child 함수 변수에 저장한다.
 * 그리고 parent()함수의 리턴값으로 내부 함수의 참조값을 가진 child함수변수를 리턴한다.
 * 
 * 2. parent()함수가 호출되면 inner변수에 child 함수 변수 값이 리턴된다.
 * child 함수변수는 내부 함수의 참조값이 있으므로, inner변수도 child() 내부 함수를 참조한다.
 * 
 * 3. inner변수에 함수 호출 연산자를 붙여 함수 호출 구문을 만들면, parent() 함수 스코프
 * 밖에서도 내부 함수 child()가 호출된다. 호출하는 내부함수에는 a 변수가 정의되어 있지않아.
 * 스코프 체이닝으로 부모 함수에 a변수가 정의되어 있는지 확인하게 되고, a가 정의되어 있으면
 * 그 값이 그 대로 출력된다.
 * 
 * 4. 이와 같이 실행이 끝난 parent()와 같은 부모 함수 스코프의 변수를 참조하는 inner()와
 * 같은 함수를 클로저라고 한다.
 * */

function parent() {
    var a = 100;

    //child() 내부 함수
    var child = function () {
        console.log(a);
    }
    //child() 함수 반환
    return child;
}

var inner = parent();
inner();