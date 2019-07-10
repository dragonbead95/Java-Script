// JavaScript source code
//예제3-8 for in 문을 통한 객체 프로퍼티 출력

/*
 1. for in 문이 수행되면서 prop 변수에 foo 객체의 프로퍼티가 하나씩 할당된다.
 */

//객체 리터럴을 통한 foo 객체 생성

var foo = {
    name: 'foo',
    age: 30,
    major: 'computer science'
};

//for in문을 이용한 객체 프로퍼티 출력
var prop;
for (prop in foo) {
    console.log(prop, foo[prop]);
}

//객체 프로퍼티 삭제
//키워드 delete
//객체의 프로퍼티를 삭제할수는 있지만 객체 자체를 삭제할수는 없다.

var foo2 = {
    name: 'foo2',
    nickname: 'babo'
}

console.log(foo2.nickname);  //출력값 babo
delete foo2.nickname;        // 출력값 nickname 프로퍼티 삭제
console.log(foo2.nickname);  //출력값 undefined

delete foo2; //출력값 foo 객체 삭제 시도
console.log(foo2.name);  //출력값 foo
