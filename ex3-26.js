// JavaScript source code
//ex3-26 유사 배열 객체에서 apply()를 활용한 배열 메서드 호출

/*
 1. 유사 배열 객체의 경우 apply()메서드를 사용하면 객체지만 표준 배열 메서드를 활용하는 것이
 가능하다.
 2. 유사배열객체도 배열 메서드를 사용하는 것이 가능하다.
 */


var arr = ['bar'];
var obj = {
    name: 'foo',
    length: 1
};

arr.push('baz');
console.log(arr);   //출력값은 ['bar','baz']

Array.prototype.push.apply(obj, ['baz']);
console.log(obj);   //출력값 {'1':'baz', name:'foo', length:2}
