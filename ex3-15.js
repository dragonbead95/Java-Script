// JavaScript source code
//ex3-15 �迭�� length ������Ƽ ����

/*
1. �迭�� ���̴� arr[100]�� �ϴ� ���� 0���� 101�� �����Ѵ�.
2. ������ ���� �޸𸮴� length ũ��ó�� �Ҵ������ �ʴ´�.
*/

var arr = [];
console.log(arr.length); //��°� 0

arr[0] = 0; // arr.length = 1
arr[1] = 1; // arr.length = 2
arr[2] = 2; // arr.length = 3
arr[100] = 100; // arr.length = 101

console.log(arr.length);    //��°� 101