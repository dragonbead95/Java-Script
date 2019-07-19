// JavaScript source code
//ex4-42 ������Ÿ�� �޼���� this ���ε�

/**
 * 1.foo.getName()�� �����Ҷ� foo��ü���� getName()�޼��尡 �����Ƿ� ������Ÿ�� ��ũ�� ���ؼ� Person.prototye ��ü�� �����Ѵ�. Person.prototype ��ü���� getName()�޼��尡 �����Ƿ� �����Ų��. getName()�ȿ� this�� �ڽ��� ȣ���� ��ü�� ���ε��ȴ�. ���⼭�� foo ��ü�� ���ε��ȴ�.
 * 
 * 2. ���� Person.prototype ��ü�� name ������Ƽ�� �ְ� Person.prototype.getName()�� �����Ҷ� �ڽ��� ������ ��ü�� Person.prototype���� this�� ���ε��ȴ�. �׷��� Person.prototype ��ü �ȿ� �ִ� name������Ƽ�� �����ϰ� �ȴ�.
 */

//Person() ������ �Լ�
function Person(name) {
    this.name = name;
}

//getName() ������Ÿ�� �޼���
Person.prototype.getName = function () {
    return this.name;
};

//foo��ü ����
var foo = new Person('foo');

console.log(foo.getName()); //��°� foo

//Person.prototype ��ü�� name ������Ƽ ���� �߰�
Person.prototype.name = 'person';

console.log(Person.prototype.getName());    //Person ���
