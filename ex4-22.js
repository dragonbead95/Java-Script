// JavaScript source code
//ex4-22 arguments ��ü ���� �ڵ�

/**
 * 1. arguments ��ü�� ���� �迭 ��ü�̴�.
 */

//add()�Լ�
function add(a, b) {
    //arguments ��ü ���
    console.dir(arguments);
    return a + b;
}

console.log(add(1));        //��°� NaN
console.log(add(1, 2));     //��°� 3
console.log(add(1, 2, 3));    //��°� 3

//arguments ��ü�� Ȱ��
function sum() {
    var result = 0;

    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];

    }
    return result;
}

console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3,4,5,6,7,8,9));