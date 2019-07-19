// JavaScript source code
//ex4-31 apply()�޼��带 �̿��� ������� this���ε�

/**
 * 1. this�� Ư�� ��ü�� ��������� ���ε���Ű�� ����� �����Ѵ�.
 * 2. ������� ���ε� ��Ű�� ������� apply()�� call() �޼����.
 * 3. function.apply(thisArg, argArray);
 *  - thisArg�� �Լ� ���ο��� ����� this�� ���ε��� ��ü�� ����Ų��.
 *  - argArray ���ڴ� �Լ��� ȣ���Ҷ� �ѱ� ���ڵ��� �迭�� ����Ų��.
 */

//������ �Լ�
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

//foo �� ��ü ����
var foo = {};

//apply()�޼��� ȣ��
Person.apply(foo, ['foo', '30', 'man']);
console.dir(foo);
