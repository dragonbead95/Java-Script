// JavaScript source code
//ex3-17 push()�޼���� length ������Ƽ

/*
1. arr.length�� ���� ���Ƿ� 5�� �ٲٸ� push() �޼����� ������
arr[5]�ڸ��� 'four'�� �ְ� arr[4]�� defined���� ���´�.
*/

//arr �迭 ����
var arr = ['zero', 'one', 'two'];

//push() �޼��� ȣ��
arr.push('three');
console.log(arr);   //��°� ['zero','one','two','three']

//length �� ������, push()�޼��� ȣ��
arr.length = 5;
arr.push('four');
console.log(arr);   //��°� ['zero','one','two','three',undefined,'four']