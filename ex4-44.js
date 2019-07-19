// JavaScript source code
//ex4-44 ������Ÿ�� ü�̴װ� ���� ������Ƽ ����

/**
 * 1. ��ü�� Ư�� ������Ƽ�� �������� �Ҷ�, ������Ƽ�� �ش� ��ü�� ���� ��� ������Ÿ�� ü�̴��� �߻��Ѵ�.
 * 
 * 2. �ݴ�� ��ü�� �ִ� Ư�� ������Ƽ�� ���� ������ �Ѵٸ� �̶��� ������Ÿ�� ü�̴��� �Ͼ�� �ʴ´�. �ֳ��ϸ� �ڹٽ�ũ��Ʈ�� ��ü�� ���� ������Ƽ�� ���� ������ �� ��� �������� ��ü�� ������Ƽ�� �߰��ϱ� �����̴�.
 */

//Person() ������ �Լ�
function Person(name) {
    this.name = name;
}

Person.prototype.country = 'Korea';

var foo = new Person('foo');
var bar = new Person('bar');
console.log(foo.country);
console.log(bar.country);
foo.country = 'USA';    //foo ��ü�� �������� �����ȴ�.
                        //foo��ü���� country ������Ƽ�� ���ܳ���
                        //bar��ü���� country ������Ƽ�� ��� Person.prototype ��ü�� �ִ� country ������Ƽ�� �����Ѵ�.

console.log(foo.country);
console.log(bar.country);