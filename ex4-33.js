// JavaScript source code
//ex4-33 slice()�޼��� ��� ����
//�迭�� �ε����� 0��°���� ����
var arrA = [1, 2, 3];
var arrB = arrA.slice(0);   //[1,2,3]  0��°���� ������
var arrC = arrA.slice();    //[1,2,3];  �迭��ü
var arrD = arrA.slice(1);   //[2,3]     �ε���1������ ������
var arrE = arrA.slice(1, 2);    // [2]  �ε���1������ end-1����
var arrF = arrA.slice(0, 1);        
console.log(arrA);
console.log(arrB);
console.log(arrC);
console.log(arrD);
console.log(arrE);
console.log(arrF);