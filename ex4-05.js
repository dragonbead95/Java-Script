// JavaScript source code
//ex4-05 Function() ������ �Լ��� �̿��� add()�Լ� ����

/**
 * 1. new Function(arg1, arg2, ... argN,functionBody)
 * 
 * arg1, arg2, argN - �Լ��� �Ű�����
 * functionBody - �Լ��� ȣ��� �� ����� �ڵ带 ������ ���ڿ�
 * 
 * 2. Function() ������ �Լ��� ����� �Լ� ���� ����� ���� �������� �ʴ´�.
 * ��� ���ؿ����� �˸� ����.
 * */

var add = new Function('x', 'y', 'return x+y');
console.log(add(3, 4)); //��°� 7


