// JavaScript source code
//ex5-09 특정함수에 사용자가 정의한 객체의 메서드 연결하기

function HelloFunc(func) {
    this.greeting = "hello";
}

HelloFunc.prototype.call = function (func) {
    func ? func(this.greeting) : this.func(this.greeting);
}

var userFunc = function (greeting) {
    console.log(greeting);
}
var objHello = new HelloFunc();
objHello.func = userFunc;
objHello.call();



function saySomething(obj, methodName, name) {
    return (function (greeting) {
        return obj[methodName](greeting, name);
    });
}

function newObj(obj, name) {
    obj.func = saySomething(this, "who", name);
    return obj;
}

newObj.prototype.who = function (greeting, name) {
    console.log(greeting + " " + (name || "everyone"));
}

var obj1 = new newObj(objHello, "zzoon");
obj1.call();