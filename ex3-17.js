// JavaScript source code
//ex3-17 push()메서드와 length 프로퍼티

/*
1. arr.length의 값을 임의로 5로 바꾸면 push() 메서드의 동작은
arr[5]자리에 'four'를 넣고 arr[4]는 defined으로 남는다.
*/

//arr 배열 생성
var arr = ['zero', 'one', 'two'];

//push() 메서드 호출
arr.push('three');
console.log(arr);   //출력값 ['zero','one','two','three']

//length 값 변경후, push()메서드 호출
arr.length = 5;
arr.push('four');
console.log(arr);   //출력값 ['zero','one','two','three',undefined,'four']