// JavaScript source code
//ex3-25 ���� �迭 ��ü�� �迭 �޼ҵ� ȣ��

/*
 1. ��ü �߿� length ������Ƽ�� ���� ��ü�� ����迭 ��ü(array-like objects)��� �θ���.
 */
var arr = ['bar'];
var obj = {
    name: 'foo',
    length: 1
};

arr.push('baz');
console.log(arr);   //��°��� ['bar','baz']

obj.push('baz');    //��°� error