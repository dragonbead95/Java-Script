// JavaScript source code
//ex3-20 �迭�� ���� ������Ƽ ����

/*
 1. �迭�� ������Ƽ�� �������� �����Ҽ��ִ�.
 �׷��� length���� ������ ������ �ʴ´�.

 2. �迭�� length ������Ƽ�� �迭 ������ ���� ū �ε����� ������ ��츸 ����ȴ�.
*/

//�迭����
var arr = ['zero', 'one', 'two'];
console.log(arr.length);    //��°� 3

//������Ƽ ���� �߰�
arr.color = 'blue';
arr.name = 'number_array';
console.log(arr.length);    //��°� 3

//�迭 ���� �߰�
arr[3] = 'red';
console.log(arr.length);    //��°� 4

//�迭 ��ü ���
console.dir(arr);