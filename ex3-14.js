// JavaScript source code
//ex3-14 �迭 ����� ���� ����

/*
1.�迭�� ��Ҹ� �������� �߰��Ҽ��ִ�.
2.�迭�� ���̴� �ε��� �� ���� ū ���� �������� ���Ѵ�.
3.����ִ� �ε����� ��Ҵ� undefined�� ����ȴ�.
4.length�� ���̴� 8������ ���� ����� ������ 3���̴�.
*/

//�� �迭
var emptyArr = [];
console.log(emptyArr[0]);   //��°� undefined

//�迭 ��� ���� ����
emptyArr[0] = 100;
emptyArr[3] = 'eight';
emptyArr[7] = true;
//��°� [100,undefined,undefined,"eight",undefined,undefined,undefined,true]
console.log(emptyArr);

console.log(emptyArr.length);   //��°� 8