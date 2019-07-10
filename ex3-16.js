// JavaScript source code
//ex3-16 배열 length 프로퍼티의 명시적 변경

var arr = [0, 1, 2];
console.log(arr.length);    //출력값 3

//3,4번 인덱스는 undefined으로 설정된다.
arr.length = 5;
console.log(arr);   //출력값 [0,1,2,undefined,undefined]

//length를 2로 설정하면 arr[2]에 있는 숫자 2는 삭제된다.
arr.length = 2;
console.log(arr);   //출력값 [0,1]
console.log(arr[2]);    //출력값 undefined