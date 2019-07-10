// JavaScript source code
//ex4-12 add()�Լ� ��ü ������Ƽ�� ����ϴ� �ڵ�

/**
 * 1. �Ϲ� ��ü�ʹ� �ٸ��� �߰��� �Լ� ��ü���� ǥ�� ������Ƽ�� ���ǵǾ� �ִ�.
 * 2. ��� �Լ��� length�� prototype ������Ƽ�� ������ �Ѵٰ� ����ϰ��ִ�.
 * 3. name������Ƽ�� �Լ��� �̸��� ��Ÿ����.
 *      caller ������Ƽ�� �ڽ��� ȣ���� �Լ��� ��Ÿ����.
 *      arguments ������Ƽ�� �Լ��� ȣ���� �� ���޵� ���ڰ��� ��Ÿ����.
 *      
 *  4. add() �Լ��� ������Ÿ�� ��ü�� Function.prototype ��ü��� �ϸ�, �̰� ���� �Լ� ��ü�̴�.
 *  
 *  5. Function.prototype �Լ� ��ü�� �θ�� Object.prototype ��ü�̴�.
 *  
 *  6. Function.prototype �Լ� ��ü�� ��� �Լ����� �θ� ������ �ϴ� ������Ÿ�� ��ü�̴�.
 *  
 *  7. Function.prototype ��ü�� ũ�� ������������ Empty()�Լ��� ���ϰ� ������ 
 *  Empty()�Լ��� ������ �ִ� ������Ƽ�� �޼����� �Ϻδ� ������ ����.
 *  
 *   - constructor ������Ƽ
 *   - toString() �޼���
 *   - apply(thisArg, argArray) �޼���
 *   - call(thisArg,[,arg1[,arg2,]]) �޼���
 *   - bind(thisArg,[,arg1[,arg2,]]) �޼���
 *   ���
 */

function add(x, y) {
    return x + y;
}

console.dir(add);