// JavaScript source code
//ex3-20 배열의 동적 프로퍼티 생성

/*
 1. 배열에 프로퍼티를 동적으로 생성할수있다.
 그러나 length에는 영향을 주지는 않는다.

 2. 배열의 length 프로퍼티는 배열 원소의 가장 큰 인덱스가 변했을 경우만 변경된다.
*/

//배열생성
var arr = ['zero', 'one', 'two'];
console.log(arr.length);    //출력값 3

//프로퍼티 동적 추가
arr.color = 'blue';
arr.name = 'number_array';
console.log(arr.length);    //출력값 3

//배열 원소 추가
arr[3] = 'red';
console.log(arr.length);    //출력값 4

//배열 객체 출력
console.dir(arr);