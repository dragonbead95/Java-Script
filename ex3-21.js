// JavaScript source code
//ex3-21 �迭�� ������Ƽ ����

/*
 1. for in���� �迭�� ������Ƽ������ ����� �����ϴ�.
 2. for���� �迭�� ��Ҹ� ����� �����ϴ�.
*/

//�迭����
var arr = ['zero', 'one', 'two'];

//������Ƽ ���� �߰�
arr.color = 'blue';
arr.name = 'number_array';

//�迭 ���� �߰�
arr[3] = 'red';


for (var prop in arr) {
    console.log(prop, arr[prop]);
}

for (var i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
}