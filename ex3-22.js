// JavaScript source code
//ex3-22 delete 연산자를 이용한 배열 프로퍼티 삭제

/*
1. 배열도 객체이므로 배열 요소나 프로퍼티를 삭제하는데 delete 연산자를 사용 할 수 있다.
2. delete연산자는 해당 요소의 값을 undefined로 설정할뿐 원소 자체를 삭제하지는 않는다.
*/

var arr = ['zero', 'one', 'two', 'three'];
delete arr[2];
console.log(arr);   //출력값 ['zero','one',undefined,'three']
console.log(arr.length);    //출력값 4
