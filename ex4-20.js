// JavaScript source code
//ex4-20 �ڽ��� �������ϴ� �Լ� ���� �ڵ�

/**
 * 1. �Լ��� �����ϴ� �Լ�
 * 2. �Լ��� �ϱ� ��ü�̹Ƿ� �Ϲ� ��ó�� �Լ� ��ü�� �����Ҽ� �ִ�.
 * */

//self �Լ�
var self = function () {
    console.log('a');
    return function () {
        console.log('b');
    }
};

self = self();
self();