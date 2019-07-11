// JavaScript source code
//ex4-18 내부 함수 예제 코드

/**
 * 1. 자바스크립트에서는 함수 코드 내부에서도 다시 함수 정의가 가능하다. 이를 내부함수라 한다.
 * 2. 내부함수에서는 자신을 둘러싼 부모 함수의 변수에 접근이 가능하다. 이를 스코프 체이닝이라고 한다.
 * 3. 부모함수의 외부에서 내부 함수를 호출하는것이 불가능하다.
 * 4. 부모 함수 안에서는 child() 내부 함수를 호출하는것이 가능하다. 내부 함수를 호출하는
 * 부분과 내부함수가 정의된 부분이 모두 부모 함수 내부에 있기 때문이다.
 * */

//parent() 함수 정의
function parent() {
    var a = 100;
    var b = 200;
    
    //child() 함수 정의
    function child() {
        var b = 300;
        console.log(a);
        console.log(b);
    }
    child();
}

parent();
child();