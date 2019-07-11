// JavaScript source code
//ex4-14 �Լ� ��ü�� ������Ÿ�� ��ü���� ���踦 �����ִ� �ڵ�

/**
 * 1. ��� ��ü�� �ִ� ���� ������Ƽ�� [[Prototype]]�� ��ü ���忡�� �ڽ��� �θ� ������ �ϴ�
 * ������Ÿ�� ��ü�� ����Ų��.
 * 
 * 2. �Լ� ��ü�� ������ prototype ������Ƽ�� �� �Լ��� �����ڷ� ���� �� �� �Լ��� ����
 * ������ ��ü�� �θ� ������ �ϴ� ������Ÿ�� ��ü�� ����Ų��.
 * 
 * 3. prototype ������Ƽ�� �Լ��� ������ �� ���������, ���� �׸��� ���� ���� constructor
 * ������Ƽ �ϳ��� �ִ� ��ü�� ����Ų��.
 * 
 * 4. prototype ������Ƽ�� ����Ű�� ������Ÿ�� ��ü�� ������ constructor ������Ƽ�� �ڽŰ�
 * ����� �Լ��� ����Ų��. ��, �ڹٽ�ũ��Ʈ������ �Լ��� �����Ҷ�, �Լ� �ڽŰ� ����� ������
 * Ÿ�� ��ü�� ���ÿ� �����ϸ�, �̵��� ���� �׸�ó�� ���� prototype�� constructor��� ������Ƽ
 * �� ���θ� �����ϰ� �ȴ�.
 * */

//MyFunction() �Լ� ����
/*�켱 myFunction()�̶�� �Լ��� �����ߴ�. �Լ��� �����ʰ� ���ÿ� myFunction() �Լ��� 
prototype ������Ƽ���� �� �Լ��� ����� ������ Ÿ�� ��ü�� �����ȴ�. ->(constructor ������
Ÿ�� ��ü�� Object.prototype ��ü)
*/
function myFunction() {
    return true;
}

/*
 * myFunction.prototype�� myFunction() �Լ��� ������Ÿ�� ��ü�� �ǹ��Ѵ�.
 * myFunction.prototype ��ü�� constructor�� _proto_��� �� ���� ������Ƽ�� �ִ�. �ռ�
 * �����ߵ��� �� ��ü�� myFunction() �Լ��� ������Ÿ�� ��ü�̹Ƿ� constructor ������Ƽ��
 * ������ Ȯ���� �� �ִ�.
 * ����, ������Ÿ�� ��ü ���� �ڹٽ�ũ��Ʈ ��ü�̹Ƿ� ���� ���� �ڽ��� �θ� ������ �ϴ�
 * _proto_ ������Ƽ�� �ִ�.
 */

console.dir(myFunction.prototype);
console.dir(myFunction.prototype.constructor);
//myFunction�� prototype ������Ƽ�� ����Ű��
// �ִ� myFunction.prototype�� constructor ������Ƽ�� ����Ű�� �ִ� ��ü, �� MyFunction��
// �ǹ��Ѵ�.


function Ultra() { }
Ultra.prototype.ultraProp = true;

function Super() { }
Super.prototype = new Ultra();

function Sub() { }
Sub.prototype = new Super();

var o = new Sub();

console.dir(o);


/**
 * add()��� �Լ���ü�� �ְ�, add�� ������Ƽ�鿡�� TempInfo��� �̸��� ��ü�� add�Լ��� 
 * ������Ƽ(�Ӽ�)���� �����Ѵ�.
 * �׸��� add�� ������Ƽ���� prototype�̶�� �̸��� ��ü�� add�Լ��� ������Ƽ�� �����ϴµ�
 * �� prototype ��ü�� �Ӽ����� TempInfo2��� �̸��� ��ü�� prototype ��ü�� ������Ƽ(�Ӽ�)��
 * �����Ѵ�.
 * 
 * �����ϸ� ��ü�ȿ��� �Ǵٸ� ��ü�� ������Ƽ�μ� �����Ҽ� �ִ�.
 * 
 * */
/*
function add() {
    return 1;
}

var info = {
    name: 'foo',
    age: 35
}

var info2 = {
    name: 'babo',
    age: 20
}
add.TempInfo = info;
add.prototype.TempInfo2 = info2;
console.dir(add);
*/