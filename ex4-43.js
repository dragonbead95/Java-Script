// JavaScript source code
//ex4-43 ������Ÿ�� ��ü ����

/**
 * 1. �ڹٽ�ũ��Ʈ������ �̷��� �Լ��� �����Ҷ� �ش� �Լ��� ����Ǵ� ����Ʈ ������Ÿ�� ��ü�� �ٸ� �Ϲ� ��ü�� �����ϴ� ���� �����ϴ�.
 * 
 * 2. ��������
 * ������ �Լ��� ������Ÿ�� ��ü�� ����Ǹ�, ����� ���� ���Ŀ� ������ ��ü���� ����� ������Ÿ�� ��ü�� __proto__ ��ũ�� �����Ѵٴ� ���� ����ؾ� �Ѵ�. �̿� ���� ������ �Լ��� ������Ÿ���� ����Ǳ� ������ ������ ��ü���� ���� ������Ÿ�� ��ü���� __proto__��ũ�� �״�� �����Ѵ�.
 */

//Person() ������ �Լ�
function Person(name) {
    this.name = name;
}

console.log(Person.prototype.constructor);

//foo��ü����
var foo = new Person('foo');
console.log(foo.country);

//����Ʈ ������Ÿ�� ��ü ����
Person.prototype = {
    country: 'korea',
};

//Person.prototype ��ü���� constructor ������Ƽ�� ���� ������ __proto__ ������Ÿ�� ��ũ�� ���ؼ� Object.prototype��ü�� constructor�� �����ؼ� Object()�� ���´�.
console.log(Person.prototype.constructor);

//bar��ü ����
var bar = new Person('bar');
console.log(foo.country);   //������ ����� ������Ÿ�԰�ü�� �����Ѵ�.
                            //����Ʈ ������Ÿ�� ��ü���� country ������Ƽ�� ����.
console.log(bar.country);
console.log(foo.constructor);
console.log(bar.constructor);   //bar��ü���� constructor�� �����Ƿ� ������Ÿ�Ը�ũ�� ���ؼ� Person.prototype ��ü�� �����Ѵ�. �׷��� Person.prototype ��ü���� constructor ������Ƽ�� ���� ������ Person.prototype ��ü�� ������Ÿ�� ��ũ�� ���ؼ� Object.prototype ��ü�� constructor ������Ƽ�� �����Ѵ�.


console.log(bar);