// JavaScript source code
//ex3-15 배열의 length 프로퍼티 변경

/*
1. 배열의 길이는 arr[100]을 하는 순간 0에서 101로 증가한다.
2. 하지만 실제 메모리는 length 크기처럼 할당되지는 않는다.
*/

var arr = [];
console.log(arr.length); //출력값 0

arr[0] = 0; // arr.length = 1
arr[1] = 1; // arr.length = 2
arr[2] = 2; // arr.length = 3
arr[100] = 100; // arr.length = 101

console.log(arr.length);    //출력값 101