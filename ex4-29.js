// JavaScript source code
//ex4-29 ��ü ���� �ΰ��� ���(��ü���ͷ� vs ������ �Լ�)

/**
 * 1. ��ü ���ͷ� ��İ� ������ �Լ� ����� ���̴� ������Ÿ�� ��ü�� �ִ�.
 * 
 * 2. ��ü ���ͷ� ����� ���� �ڽ��� ������Ÿ�� ��ü�� Object(�����δ� Object.prototype�̴�)
 * 
 * 3. ������ �Լ� ����� ���� Person(�����δ� Person.prototype)���� ���� �ٸ���.
 * 
 * 4. �ڹٽ�ũ��Ʈ ��ü�� �ڽ��� ������ ������ �Լ��� prototype ������Ƽ�� ����Ű�� ��ü�� �ڽ��� ������Ÿ�� ��ü�� �����Ѵ�. ��ü ���ͷ� ��Ŀ����� ��ü ������ �Լ��� Object()�̸�,
 * ������ �Լ� ����� ���� ������ �Լ� ��ü�̴�.
 * */

//��ü ���ͷ� ������� foo ��ü ����
var foo = {
    name: 'foo',
    age: 35,
    gender: 'man'
};

console.dir(foo);

//������ �Լ�
function Person(name, age, gender, position) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.position = position;
}

//Person ������ �Լ��� �̿��� bar ��ü, baz ��ü ����
var bar = new Person('bar', 33, 'woman');
console.dir(bar);

var baz = new Person('baz', 25, 'woman');
console.dir(baz);