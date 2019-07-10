// JavaScript source code
//ex3-9 동일한 객체를 참조하느 두 변수 objA와 objB

/*
 1. objA 객체를 객체 리터럴 방식으로 생성했다. 여기서 objA 변수는 객체 자체를 저장하고
 있는것이 아니라 생성된 객체를 가리키는 참조값을 저장하고 있다는 것을 기억하자.

 2. 변수 objB에 objA 값을 할당한다. objA는 1에서 생성된 객체를 가리키는 참조값을 가지고 있으므로
 변수 objB에도 이같은 객체의 참조값이 저장된다. 즉 다음과 같이 objA와 objB 변수가 동일한 객체를
 가리키는 참조값을 가지게 되는 것이다. 때문에 a.val과 b.val값이 40으로 같게된다.
 */

var objA = {
    val: 40
};

var objB = objA;

console.log(objA.val);  //출력값 40
console.log(objB.val);  //출력값 40

objB.val = 50;
console.log(objA.val);  //출력값 50
console.log(objB.val);  //출력값 50

