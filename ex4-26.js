// JavaScript source code
//���� �Լ��� this ���ε� ������ �����ִ� ���� �ڵ�

// ���� ���� value ����
var value = 100;

//myObject ��ü ����
var myObject = {
    value: 1,
    func1: function () {
        this.value += 1;
        console.log('func1() called. this.value : ' + this.value);

        //func2() ���� �Լ�
        func2 = function () {
            this.value += 1;
            console.log('func2() called. this.value : ' + this.value);

            //func3() ���� �Լ�
            func3 = function () {
                this.value += 1;
                console.log('func3() called, this.value : ' + this.value);
            }
            func3();
        }
        func2();
    }
};

myObject.func1();