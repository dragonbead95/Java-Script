// JavaScript source code
//ex3-26 ���� �迭 ��ü���� apply()�� Ȱ���� �迭 �޼��� ȣ��

/*
 1. ���� �迭 ��ü�� ��� apply()�޼��带 ����ϸ� ��ü���� ǥ�� �迭 �޼��带 Ȱ���ϴ� ����
 �����ϴ�.
 2. ����迭��ü�� �迭 �޼��带 ����ϴ� ���� �����ϴ�.
 */


var arr = ['bar'];
var obj = {
    name: 'foo',
    length: 1
};

arr.push('baz');
console.log(arr);   //��°��� ['bar','baz']

Array.prototype.push.apply(obj, ['baz']);
console.log(obj);   //��°� {'1':'baz', name:'foo', length:2}
