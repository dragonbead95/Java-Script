// JavaScript source code
//ex4-27 ���� �Լ��� this ���ε� ������ �ذ��� ���� �ڵ�

/**
 * 1. �����Լ��� this�� �����ϴ� �ڹٽ�ũ��Ʈ�� �Ѱ踦 �غ��Ϸ���
 * �θ� �Լ��� this�� ���� �Լ��� ���� ������ �ٸ� ������ �����ϴ� ����� ���ȴ�.
 * */

var value = 100;

var myObject = {
    value: 1,

    func1: function () {
        /**
         * �θ��Լ��� func1()�� this���� that������ �����ߴ�.
         * func2�� func3 �����Լ��� �ڽ��� �ѷ��� �θ��Լ��� func1�� ������ ���� �����ϹǷ�
         * func2�� func3�� that������ func1�� this�� ���ε��� ��ü�� myObject�� ���� �����ϰ�
         * �ȴ�.
         * */
        var that = this;    //myObject ��ü�� that ������ ����

        that.value++;
        console.log("func1 called. value : " + that.value);

        func2= function() {
            that.value++;
            console.log("func2 called. value : " + that.value);

            func3= function() {
                that.value++;
                console.log("func3 called. value : " + that.value);
            }
            func3();
        }
        func2();
    }
};
myObject.func1();