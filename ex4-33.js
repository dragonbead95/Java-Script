// JavaScript source code
//ex4-33 slice()메서드 사용 예제
//배열의 인덱스는 0번째부터 시작
var arrA = [1, 2, 3];
var arrB = arrA.slice(0);   //[1,2,3]  0번째부터 끝까지
var arrC = arrA.slice();    //[1,2,3];  배열전체
var arrD = arrA.slice(1);   //[2,3]     인덱스1번부터 끝까지
var arrE = arrA.slice(1, 2);    // [2]  인덱스1번부터 end-1까지
var arrF = arrA.slice(0, 1);        
console.log(arrA);
console.log(arrB);
console.log(arrC);
console.log(arrD);
console.log(arrE);
console.log(arrF);