// JavaScript source code
//ex4-27 내부 함수의 this 바인딩 문제를 해결한 예제 코드

/**
 * 1. 내부함수가 this를 참조하는 자바스크립트의 한계를 극복하려면
 * 부모 함수의 this를 내부 함수가 접근 가능한 다른 변수에 저장하는 방법이 사용된다.
 * */

var value = 100;

var myObject = {
    value: 1,

    func1: function () {
        /**
         * 부모함수인 func1()의 this값을 that변수에 저장했다.
         * func2와 func3 내부함수는 자신을 둘러싼 부모함수인 func1의 변수에 접근 가능하므로
         * func2와 func3도 that변수로 func1의 this가 바인딩된 객체인 myObject에 접근 가능하게
         * 된다.
         * */
        var that = this;    //myObject 객체를 that 변수에 저장

        that.value++;
        console.log("func1 called. value : " + that.value);

        func2= function() {
            that.value++;
            console.log("func2 called. value : " + that.value);

            func3= function() {
                that.value++;
                console.log("func3 called. value : " + that.value);
            }
            func3();
        }
        func2();
    }
};
myObject.func1();