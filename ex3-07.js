// JavaScript source code
//예제3-7 객체의 프로퍼티 접근하기

// 객체 리터럴 방식을 통한 foo 객체 생성
var foo = {
    name: 'foo',
    major: 'computer science'
};

//객체 프로퍼티 읽기
console.log(foo.name);      //출력값 foo
console.log(foo['name']);   //출력값 foo
console.log(foo.nickname);  //출력값 undefined

//객체 프로퍼티 갱신
foo.major = 'electronics engineering';
console.log(foo.major);     //출력값 electronics engineering
console.log(foo['major']);  //출력값 electronics engineering

//객체 프로퍼티 동적 생성
foo.age = 30;
console.log(foo.age);   //출력값 30

//대괄호 표기법만을 사용해야 할 경우
foo['full-name'] = 'foo bar'
console.log(foo['full-name']); //출력값 foo bar
console.log(foo.full - name);  //출력값 NaN
console.log(foo.full);         //출력값 undefined
console.log(name);             //출력값 undefined

/*
 1.자바스크립트에서는 대괄호 표기법에서는 접근하려는 프로퍼티 이름을 문자열 형태로 만들지
 않으면 모든 자바 스크립트 객체에서 호출 가능한 toString()이라는 메서드를 자동으로 호출해서
 이를 문자열로 바꾸려는 시도를 한다.

2.자바스크립트 객체의 프로퍼티에 값을 할당할때, 프로퍼티가 이미 있을 경우는 해당 프로퍼티의
값이 갱신되지만, 객체의 해당 프로퍼티가 없을 경우에는 새로운 프로퍼티가 동적으로 생성된 후
값이 할당된다.

3.대괄호 표기법만을 사용해야 하는 경우는 접근하려는 프로퍼티가 표현식이거나 예약어 일경우이다.
4에서는 접근 가능하고자 하는 프로퍼티가 'full-name'이다. 'full-name' 프로퍼티의 경우는 '-'
연산자가 있는 표현식이다. 이 경우에는 대괄호 표기법만을 이용해서 foo['full-name']형태로 
프로퍼티에 접근해야 한다.

4.NaN(Not a Number) 값은 자바스크립트에서 수치 연산을 해서 정상적인 값을 얻지 못할때 출력되는
값이다. foo.full-name에서 full - name으로 빼기 연산이 되서 defined - defined 가 되서 Nan값이
출력되는 것이다.
 */