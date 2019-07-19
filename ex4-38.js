// JavaScript source code
//ex4-38 ��ü ���ͷ� ��Ŀ����� ������Ÿ�� ü�̴�

/**
 * 1. �ڹ� ��ũ������ Ư�� ��ü�� ������Ƽ�� �޼��忡 �����Ϸ��� �Ҷ�,
 * �ش� ��ü�� �����Ϸ��� ������Ƽ �Ǵ� �޼��尡 ���ٸ� [[prototype]](__proto__)��ũ�� ���� �ڽ��� �θ� ������ �ϴ� ������Ÿ�� ��ü�� ������Ƽ�� ���ʴ�� �˻��ϴ� ���� ������Ÿ�� ü�̴��̶�� �Ѵ�.
 * 
 * 2. myObject ��ü�� hasOwnProperty() �޼��带 ȣ���Ҷ� ������ �߻����� ���� ������ Object.prototype�� �޼��尡 �־��� �����̴�.
 * 
 * 3. �ڹٽ�ũ��Ʈ���� ��ü�� �ڱ� �ڽ��� ������Ƽ�Ӹ� �ƴ϶�, �ڽ��� �θ� ������
 * �ϴ� ������Ÿ�� ��ü�� ������Ƽ ���� ��ġ �ڽ��� ��ó�� �����ϴ°� �����ϴ�.
 * */

var myObject = {
    name: 'foo',
    sayName: function () {
        console.log('My name is ' + this.name);
    }
};

myObject.sayName();
console.log(myObject.hasOwnProperty('name'));
console.log(myObject.hasOwnProperty('nickname'));
myObject.sayNickName();