// JavaScript source code
//ex4-36 ������ �Լ����� ��������� �⺻ Ÿ��(�Ҹ�,����,���ڿ�) ���� �����������

/**
 * 1. ������ �Լ��� ���ϰ����� �ѱ� ���� ��ü�� �ƴ� �Ҹ�, ����, ���ڿ��� ����
 * �̷��� ���ϰ��� �����ϰ� this�� ���ε��� ��ü�� ���ϵȴ�.
 */

function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;

    return 100;
}

var result = new Person('foo', 20, 'man');
console.log(result);