// JavaScript source code
//ex4-35 ������ �Լ����� ��������� ��ü�� �������� ���

/**
 * 1. ������ �Լ����� ���ϰ��� �������� ���� ��� ������ ��ü�� ���ϵȴ�.
 * 2. ��ü ���ͷ� ����� Ư�� ��ü�� ������ ��� new �����ڷ� ������ �Լ���
 * ȣ���ؼ� ���ο� ��ü�� �����ϴ���, ���ϰ����� ��������� �ѱ� ��ü�� �迭��
 * ���ϵȴ�.
 */

//Person() ������ �Լ�
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;

    //��������� �ٸ� ��ü ��ȯ
    return { name: 'bar', age: 20, gender: 'woman' };
}

var result = new Person('foo', 30, 'man');
console.log(result);