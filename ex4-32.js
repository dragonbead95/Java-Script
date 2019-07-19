// JavaScript source code
//ex4-32 apply()메서드를 활용한 arguments 객체의 배열 표준 메서드 slice()활용코드

function myFunction() {
    console.dir(arguments);

    //arguments.shift(); 에러발생

    //arguments 객체를 배열로 전환
    //this는 arguemtns 객체로 바인딩해라
    var args = Array.prototype.slice.apply(arguments);
    console.dir(args);
}

myFunction(1, 2, 3);