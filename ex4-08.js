// JavaScript source code
//ex4-08 add()�Լ��� ��üó�� ������Ƽ�� ���� �� �ִ�.

/**
 * 1. �ڹٽ�ũ�������� �Լ��� ��ü�̴�.
 * 2. �Լ� ��ü�� �Ϲ� ��üó�� ������Ƽ���� ���� �� �ִ�.
 */

//�Լ� ���� ������� add()�Լ� ����
function add(x, y) {
    return x + y;
}

//add() �Լ� ��ü�� result, status ������Ƽ �߰�
add.result = add(3, 2);
add.status = 'OK';

console.log(add.result);    //��°� 5
console.log(add.status);    //��°� OK