// JavaScript source code
//ex4-30 new�� ������ �ʰ� ������ �Լ� ȣ�� ���� ����

/**
 * 1. new�� �ٿ��� ȣ���ϸ� ������ �Լ��̸�, new�� ������ ������ �Ϲ��Լ��̴�.
 * 
 * 2. �Ϲ��Լ��� ������ �Լ��� this ���ε��� �ٸ���.
 * 
 * 3. �Ϲ� �Լ� ȣ���� ���� this�� window ���� ��ü�� ���ε��Ǵ� ��鿡,
 *  ������ �Լ� ȣ���� ��� this�� ���� �����Ǵ� �� ��ü�� ���ε��Ǳ� �����̴�.
 * */

var qux = Person('qux', 20, 'man');
console.log(qux);               //��°� undefined

console.log(window.name);       //��°� qux
console.log(window.age);        //��°� 20
console.log(window.gender);     //��°� man