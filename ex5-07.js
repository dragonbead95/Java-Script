// JavaScript source code
//ex5-07 Ŭ������ ����

/**
 * 1. �̹� ���� �ֱⰡ ���� �ܺ� �Լ��� ������ �����ϴ� �Լ��� Ŭ������� �Ѵ�.
 * 2. x�� ���� ������ ����������� �Ѵ�.
 * */

function outerFunc() {
    var x = 10; 
    var innerFunc = function () { console.log(x) }; //�̰��� Ŭ������� �Ѵ�.
    //x�� ����������� �Ѵ�.
    return innerFunc;   
}

var inner = outerFunc();
inner();