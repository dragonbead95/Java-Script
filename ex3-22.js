// JavaScript source code
//ex3-22 delete �����ڸ� �̿��� �迭 ������Ƽ ����

/*
1. �迭�� ��ü�̹Ƿ� �迭 ��ҳ� ������Ƽ�� �����ϴµ� delete �����ڸ� ��� �� �� �ִ�.
2. delete�����ڴ� �ش� ����� ���� undefined�� �����һ� ���� ��ü�� ���������� �ʴ´�.
*/

var arr = ['zero', 'one', 'two', 'three'];
delete arr[2];
console.log(arr);   //��°� ['zero','one',undefined,'three']
console.log(arr.length);    //��°� 4
