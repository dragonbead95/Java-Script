// JavaScript source code
//ex4-23 �޼��� ȣ�� ���� this ���ε�

/*
 * 1. this�� �ڽ��� ȣ���� ��ü�� ���ε��ȴ�.
 * 2. myObject.sayName()���� this�� myObject�� ����Ų��.
 */

//myObject ��ü ����
var myObject = {
    name: 'foo',
    sayName: function () {
        console.log(this.name);
    }
};

//otherObject ��ü ����
var otherObject = {
    name: 'bar'
};

//otherObject.sayName()�޼���
otherObject.sayName = myObject.sayName;

//sayName()�޼��� ȣ��
myObject.sayName();
otherObject.sayName();
