// JavaScript source code
//ex3-11 Call by Value�� Call by Reference�� ����

/*
 1. call by value ����� �⺻Ÿ���� ���ڷ� �ѱ� ���
 ���� ����Ǿ� �Ѿ� ���� ����̴�.
 2. call by reference ����� ��ü Ÿ���� ���ڷ� �ѱ� ���
 �������� �����Ͽ� ���� ���� ����Ű�� ����� ����̴�.
 �׷��� ���ڷ� �ѱ� ��ü�� ������Ƽ ���� �ٲܼ� �ִ°��̴�.
*/

var a = 100;
var objA = { value: 100 };

function changeArg(num, obj) {
    num = 200;
    obj.value = 200;

    console.log(num);
    console.log(obj.value);
}

changeArg(a, objA);

console.log(a);
console.log(objA);