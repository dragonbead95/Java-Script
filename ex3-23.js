// JavaScript source code
//ex3-23 splice() �޼��带 �̿��� �迭 ������Ƽ ����

/*
 1. �迭���� ��ҵ��� ������ ������ ��� �ڹٽ�ũ��Ʈ������ splice() �迭 �޼��带 ����Ѵ�.
 2. splice(start, deleteCount, item...)
 start - �迭���� ���� ��ġ
 deleteCount - start���� ������ ���� ��ġ���� ������ ����� ��
 item - ������ ��ġ�� �߰��� ���
*/

var arr = ['zero', 'one', 'two', 'three'];

arr.splic(2, 1);    //2��° ��Ҹ� ���������� 1���� ���Ҹ� �����Ѵ�.
console.log(arr);   //��°� ["zero","one","three"]
console.log(arr.length);    //��°� 3