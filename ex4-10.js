// JavaScript source code
//ex4-10 �Լ��� �ٸ� �Լ��� ���ڷ� �ѱ� �ڵ�

/**
 * 1. �Լ��� �ٸ� �Լ��� ���ڷε� ������ �����ϴ�.
 */

//�Լ� ǥ�������� foo() �Լ� ����
var foo = function (func) {
    func();
}

//foo() �Լ� ����
foo(function () { console.log('Function can be used as the argument.'); });
