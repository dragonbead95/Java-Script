// JavaScript source code
//ex4-41 ������Ÿ�� ��ü�� ���� �޼��� ���� ���� �ڵ�

/**
 * 1. ������Ÿ�� ��ü ���� �ڹٽ�ũ��Ʈ ��ü�̹Ƿ� �Ϲ� ��üó�� �������� ������Ƽ�� �߰�/���� �ϴ°��� �����ϴ�.
 * 2. Person.prototype ��ü�� �������� sayHello() �޼��带 �߰��Ѵ�.
 */

//Person() ������ �Լ�
function Person(name) {
    this.name = name;
}

//foo ��ü ����
var foo = new Person('foo');

//foo.sayHello();       //error

//������Ÿ�� ��ü�� sayHello() �޼��� ����
Person.prototype.sayHello = function () {
    console.log('Hello');
}

foo.sayHello();
console.dir(Person.prototype);