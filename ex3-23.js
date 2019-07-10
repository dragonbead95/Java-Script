// JavaScript source code
//ex3-23 splice() 메서드를 이용한 배열 프로퍼티 삭제

/*
 1. 배열에서 요소들을 완전히 삭제할 경우 자바스크립트에서는 splice() 배열 메서드를 사용한다.
 2. splice(start, deleteCount, item...)
 start - 배열에서 시작 위치
 deleteCount - start에서 지정한 시작 위치부터 삭제할 요소의 수
 item - 삭제할 위치에 추가할 요소
*/

var arr = ['zero', 'one', 'two', 'three'];

arr.splic(2, 1);    //2번째 요소를 시작점으로 1개의 원소를 삭제한다.
console.log(arr);   //출력값 ["zero","one","three"]
console.log(arr.length);    //출력값 3