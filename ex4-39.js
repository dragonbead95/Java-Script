// JavaScript source code
//ex4-39 ������ �Լ� ��Ŀ����� ������Ÿ�� ü�̴�

/**
 * 1. �ڹٽ�ũ��Ʈ���� ��� ��ü�� �ڽ��� ������ ������ �Լ���
 * prototype ������Ƽ�� ����Ű�� ��ü�� �ڽ��� ������Ÿ�� ��ü(�θ� ��ü)�� ����Ѵ�.
 * 
 * 2. foo ��ü���� hasOwnProperty() �޼��尡 ��� ������Ÿ�� ��ũ(__proto__)�� ���� �ڽ��� ������Ÿ�� ��ü(�θ� ��ü)�� Person.prototype ��ü�� �����Ѵ�. �׷��� Person.prototype ��ü�� constructor ������Ƽ �ۿ� ��� Person.prototype�� ������ �ִ� ������Ÿ�� ��ũ(__proto__)�� ���ؼ� Object.prototype ��ü�� �����Ѵ�. �ű⿡�� hasOwnProperty() �޼��尡 �ֱ� ������ ������ ���� ���� �� �ִ�.
 * 
 * 3. �ڹٽ�ũ��Ʈ���� Object.prototype ��ü�� ������Ÿ�� ü�̴��� �����̴�.
 */

//Person() ������ �Լ�
function Person(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
}

//foo��ü ����
var foo = new Person('foo', 30, 'tennis');

//������Ÿ�� ü�̴�
console.log(foo.hasOwnProperty('name'));    //true

//Person.prototype ��ü ���
console.dir(Person.prototype);