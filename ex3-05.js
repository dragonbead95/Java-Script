// JavaScript source code
//ex3-5 Object() ������ �Լ��� ���� ��ü ����

/*
 1. �ڹٽ�ũ��Ʈ������ ��ü�� �����Ҷ�, ���� Object()������ �Լ��� �����Ѵ�.
 2. Object() ������ �Լ��� �̿��ؼ� foo��� �� ��ü�� ������ ��, ��� ������Ƽ(name,age,gender)
 ���� �߰��Ѵ�.
 */

//object()�� �̿��ؼ� foo �� ��ü�� ����
var foo = new Object();

//foo ��ü ������Ƽ ����
foo.name = 'foo';
foo.age = 30;
foo.gender = 'male';

console.log(typeof foo); //��°� object
console.log(foo);   //��°� {name:'foo', age:30, gender:'male'}

console.log(typeof foo.name);   //��°� string
console.log(typeof foo.age);    //��°� number
console.log(typeof foo.gender); //��°� string

