// JavaScript source code
//ex3-24 Array() 생성자 함수를 통한 배열 생성

/*
 1. Array() 생성자 함수를 사용할때는 new 연산자를 사용한다.
    ex) var foo = new Array(3) or var foo = new Array(1,2,3)

 2. Array() 생성자 함수는 호출할때 인자 개수에 따라 동작이 다른다.
    -호출할때 인자가 1개이고 숫자일 경우 : 호출된 인자를 length로 갖는 빈 배열 생성
    -그외의 경우 : 호출된 인자를 요소로 갖는 배열 생성
 */

var foo = new Array(3);
console.log(foo);   // 출력값 [undefined, undefined, undefined]
console.log(foo.length);    //출력값 3

var bar = new Array(1, 2, 3);
console.log(bar);   //출력값 [1,2,3]
console.log(bar.length);    //출력값 3