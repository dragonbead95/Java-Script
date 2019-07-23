// JavaScript source code
//ex5-16


/*setTimeOut 함수의 인자로 들어가는 함수는 자유 변수 i를 참조한다.
하지만 이 함수가 실행되는 시점은 countSecond()함수의 실행이 종료된 이후이고,
i값은 이미 4가 된 상태이다. 그러므로 setTimeOut()로 실행되는 함수는 모두 4를 출력하게 된다.
*/
/*
function countSeconds(howmany) {
    for (var i = 1; i <= howmany; i++) {
        setTimeout(function () {        //1초동안 기다린 후에 I값을 출력하게 되는데 1초 동안에 이미 i값은 4가 된다.
            console.log(i)
        }, i * 1000);
    }
};

countSeconds(3);
*/

function countSeconds2(howmany) {
    for (var i = 1; i <= howmany; i++) {
        (function (j) {
            setTimeout(console.log(j), j * 1000);
        }(i));
    }
};

countSeconds2(3);