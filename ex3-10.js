// JavaScript source code
//ex3-10 �⺻Ÿ�԰� ���� Ÿ���� �� ����

/*
    1. �������(==)�� ����Ҷ� ��ü���� ���ϸ� ��ü�� ����Ű�� �������� ���Ѵ�.
*/
var a = 100;
var b = 100;

var objA = { value: 100 };
var objB = { value: 100 };
var objC = objB;

//���� a�� b�� ���� ���ؼ� true�̴�.
console.log(a == b);    // ��°� true

//objA�� objB�� ��ü�� ������Ƽ�� ���ϴ� ���� �ƴ� ����Ű�� �������� ���Ѵ�.
console.log(objA == objB);  //��°� false

//objB�� objC�� ����Ű�� �������� ���� ������ true�� ���´�.
console.log(objB == objC);  //��°� true