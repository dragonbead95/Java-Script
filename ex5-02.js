// JavaScript source code
//ex5-02

/**
 * 1. 실행 컨텍스트가 생성되면 ㅏ바스크립트 엔진은 해당 컨텍스트에서 실행에
 * 필요한 여러 가지 정보를 담을 객체를 생성하는데, 이를 활성객체라고 한다.
 * 
 * 2. 자바스크립트에서는 함수내의 {}블록은, 이를테면 for(){},if{}와 같은 구문은 유효범위가 없다. 오직 함수만이 유효범위의 한단위가 된다. 이 유효범위를 나타내는 스코프가[[scope]]프로퍼티로 각 함수 객체 내에서 연결리스트 형식으로 관리되는데 이를 스코프 체인이라고 한다.
 */

function execute(param1, param2) {
    var a = 1, b = 2;
    function func() {
        return a + b;
    }
    return param1 + param2 + func();
}
execute(3, 4);
