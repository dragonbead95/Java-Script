// JavaScript source code
//����3-8 for in ���� ���� ��ü ������Ƽ ���

/*
 1. for in ���� ����Ǹ鼭 prop ������ foo ��ü�� ������Ƽ�� �ϳ��� �Ҵ�ȴ�.
 */

//��ü ���ͷ��� ���� foo ��ü ����

var foo = {
    name: 'foo',
    age: 30,
    major: 'computer science'
};

//for in���� �̿��� ��ü ������Ƽ ���
var prop;
for (prop in foo) {
    console.log(prop, foo[prop]);
}

//��ü ������Ƽ ����
//Ű���� delete
//��ü�� ������Ƽ�� �����Ҽ��� ������ ��ü ��ü�� �����Ҽ��� ����.

var foo2 = {
    name: 'foo2',
    nickname: 'babo'
}

console.log(foo2.nickname);  //��°� babo
delete foo2.nickname;        // ��°� nickname ������Ƽ ����
console.log(foo2.nickname);  //��°� undefined

delete foo2; //��°� foo ��ü ���� �õ�
console.log(foo2.name);  //��°� foo
