// JavaScript source code
//ex4-11 �Լ��� �ٸ� �Լ��� ���ϰ����� Ȱ���� �ڵ�

/**
 * 1. �Լ��� �ٸ� �Լ��� ���ϰ����ε� Ȱ���� �� �ִ�.
 * 2. foo()�Լ��� console.log()�� �̿��� ����ϴ� ������ �͸��Լ��� �����ϴ� ������ �Ѵ�.
 * �̰��� �Լ���ü�� ������ ��޵Ǳ� �����̴�.
 * */

//�Լ��� �����ϴ� foo() �Լ� ����
var foo = function () {
    return function () {    //���⼭ �Լ� ��ü�� ������ ��޵Ǿ� ���ϵȴ�.
        console.log('this function is the return value');
    };
};

var bar = foo();
bar();