// JavaScript source code
//ex3-16 �迭 length ������Ƽ�� ����� ����

var arr = [0, 1, 2];
console.log(arr.length);    //��°� 3

//3,4�� �ε����� undefined���� �����ȴ�.
arr.length = 5;
console.log(arr);   //��°� [0,1,2,undefined,undefined]

//length�� 2�� �����ϸ� arr[2]�� �ִ� ���� 2�� �����ȴ�.
arr.length = 2;
console.log(arr);   //��°� [0,1]
console.log(arr[2]);    //��°� undefined