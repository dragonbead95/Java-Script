// JavaScript source code
//ex5-15 �ϳ��� Ŭ������ ���� �Լ� ��ü�� ������ ü�ο� �� �ִ� ��쵵 �ִ�.

function func() {
    var x = 1;
    return {
        func1: function () { console.log(++x); },
        func2: function () { console.log(--x); }
    };
};

var exam = func();
exam.func1();
exam.func2();