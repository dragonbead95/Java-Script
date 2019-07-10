// JavaScript source code
//ex3-30 !!연산자 활요을 통한 불린값 변화

/*
 * 1. !!의 역할은 피연산자를 불린값(boolean)으로 변환하는 것이다.
 * 2. 비어있는 빈 객체라도 true로 변환되는것에 주의해야 한다.
 */

console.log(!!0);           //출력값 false
console.log(!!1);           //출력값 true
console.log(!!'string');    //출력값 true
console.log(!!'');          //출력값 false
console.log(!!true);        //출력값 true
console.log(!!false);       //출력값 false
console.log(!!null);        //출력값 false
console.log(!!undefined);   //출력값 false
console.log(!!{});          //출력값 true
console.log(!![1, 2, 3]);   //출력값 true