// JavaScript source code
//����3-7 ��ü�� ������Ƽ �����ϱ�

// ��ü ���ͷ� ����� ���� foo ��ü ����
var foo = {
    name: 'foo',
    major: 'computer science'
};

//��ü ������Ƽ �б�
console.log(foo.name);      //��°� foo
console.log(foo['name']);   //��°� foo
console.log(foo.nickname);  //��°� undefined

//��ü ������Ƽ ����
foo.major = 'electronics engineering';
console.log(foo.major);     //��°� electronics engineering
console.log(foo['major']);  //��°� electronics engineering

//��ü ������Ƽ ���� ����
foo.age = 30;
console.log(foo.age);   //��°� 30

//���ȣ ǥ������� ����ؾ� �� ���
foo['full-name'] = 'foo bar'
console.log(foo['full-name']); //��°� foo bar
console.log(foo.full - name);  //��°� NaN
console.log(foo.full);         //��°� undefined
console.log(name);             //��°� undefined

/*
 1.�ڹٽ�ũ��Ʈ������ ���ȣ ǥ��������� �����Ϸ��� ������Ƽ �̸��� ���ڿ� ���·� ������
 ������ ��� �ڹ� ��ũ��Ʈ ��ü���� ȣ�� ������ toString()�̶�� �޼��带 �ڵ����� ȣ���ؼ�
 �̸� ���ڿ��� �ٲٷ��� �õ��� �Ѵ�.

2.�ڹٽ�ũ��Ʈ ��ü�� ������Ƽ�� ���� �Ҵ��Ҷ�, ������Ƽ�� �̹� ���� ���� �ش� ������Ƽ��
���� ���ŵ�����, ��ü�� �ش� ������Ƽ�� ���� ��쿡�� ���ο� ������Ƽ�� �������� ������ ��
���� �Ҵ�ȴ�.

3.���ȣ ǥ������� ����ؾ� �ϴ� ���� �����Ϸ��� ������Ƽ�� ǥ�����̰ų� ����� �ϰ���̴�.
4������ ���� �����ϰ��� �ϴ� ������Ƽ�� 'full-name'�̴�. 'full-name' ������Ƽ�� ���� '-'
�����ڰ� �ִ� ǥ�����̴�. �� ��쿡�� ���ȣ ǥ������� �̿��ؼ� foo['full-name']���·� 
������Ƽ�� �����ؾ� �Ѵ�.

4.NaN(Not a Number) ���� �ڹٽ�ũ��Ʈ���� ��ġ ������ �ؼ� �������� ���� ���� ���Ҷ� ��µǴ�
���̴�. foo.full-name���� full - name���� ���� ������ �Ǽ� defined - defined �� �Ǽ� Nan����
��µǴ� ���̴�.
 */