// JavaScript source code
//ex4-40 String �⺻ Ÿ�Կ� �޼��� �߰�

/**
 * 1. �ڹٽ�ũ��Ʈ�� ����, ���ڿ�, �迭 ��� ���Ǵ� ǥ�� �޼������ ���
 * , �̵��� ������Ÿ���� Number.prototype, String.prototype, Array.prototype � ���� �Ǿ� �ִ�.
 * 
 * 2. �̷��� ǥ�� �޼������ ������Ÿ�Ե鵵 �������� Object.prototype���� ����Ǿ� �ִ�.
 * 
 * 3. �θ� ������Ÿ�� ��ü�� �Լ� ��ü�� �������� �����ؼ� �� �� �ִ�.
 * */
String.prototype.testMethod = function () {
    console.log('This is the String.prototype.testMethod()');
};

var str = 'this is test';
str.testMethod();
console.dir(String.prototype);