// JavaScript source code
//ex3-14 배열 요소의 동적 생성

/*
1.배열에 요소를 동적으로 추가할수있다.
2.배열의 길이는 인덱스 중 가장 큰 값을 기준으로 정한다.
3.비어있는 인덱스의 요소는 undefined로 저장된다.
4.length의 길이는 8이지만 실제 요소의 개수는 3개이다.
*/

//빈 배열
var emptyArr = [];
console.log(emptyArr[0]);   //출력값 undefined

//배열 요소 동적 생성
emptyArr[0] = 100;
emptyArr[3] = 'eight';
emptyArr[7] = true;
//출력값 [100,undefined,undefined,"eight",undefined,undefined,undefined,true]
console.log(emptyArr);

console.log(emptyArr.length);   //출력값 8