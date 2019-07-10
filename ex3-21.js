// JavaScript source code
//ex3-21 배열의 프로퍼티 열거

/*
 1. for in문은 배열의 프로퍼티까지도 출력이 가능하다.
 2. for문은 배열의 요소만 출력이 가능하다.
*/

//배열생성
var arr = ['zero', 'one', 'two'];

//프로퍼티 동적 추가
arr.color = 'blue';
arr.name = 'number_array';

//배열 원소 추가
arr[3] = 'red';


for (var prop in arr) {
    console.log(prop, arr[prop]);
}

for (var i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
}