// JavaScript source code
//ex3-25 유사 배열 객체의 배열 메소드 호출

/*
 1. 객체 중에 length 프로퍼티를 가진 객체를 유사배열 객체(array-like objects)라고 부른다.
 */
var arr = ['bar'];
var obj = {
    name: 'foo',
    length: 1
};

arr.push('baz');
console.log(arr);   //출력값은 ['bar','baz']

obj.push('baz');    //출력값 error