// JavaScript source code
//ex3-24 Array() ������ �Լ��� ���� �迭 ����

/*
 1. Array() ������ �Լ��� ����Ҷ��� new �����ڸ� ����Ѵ�.
    ex) var foo = new Array(3) or var foo = new Array(1,2,3)

 2. Array() ������ �Լ��� ȣ���Ҷ� ���� ������ ���� ������ �ٸ���.
    -ȣ���Ҷ� ���ڰ� 1���̰� ������ ��� : ȣ��� ���ڸ� length�� ���� �� �迭 ����
    -�׿��� ��� : ȣ��� ���ڸ� ��ҷ� ���� �迭 ����
 */

var foo = new Array(3);
console.log(foo);   // ��°� [undefined, undefined, undefined]
console.log(foo.length);    //��°� 3

var bar = new Array(1, 2, 3);
console.log(bar);   //��°� [1,2,3]
console.log(bar.length);    //��°� 3