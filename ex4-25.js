// JavaScript source code
//ex4-25 �Լ��� ȣ���� �� this ���ε��� �����ִ� ���� �ڵ�

/**
 * 1. test��� ���������� �����Ͽ� window ���� ��ü�� ������Ƽ�� ������ �����ϴ�.
 * 2. sayFoo() �Լ����� this�� ���� ��ü�� ���ε��� �ȴ�. ���� window.test�� �ǹ��Ѵ�.
 * */

var test = 'This is test';
console.log(window.test);

//sayFoo() �Լ�
var sayFoo = function () {
    console.log(this.test); //sayFoo() �Լ� ȣ��� this�� ���� ��ü�� ���ε��ȴ�.
}

sayFoo();