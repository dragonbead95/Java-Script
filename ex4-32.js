// JavaScript source code
//ex4-32 apply()�޼��带 Ȱ���� arguments ��ü�� �迭 ǥ�� �޼��� slice()Ȱ���ڵ�

function myFunction() {
    console.dir(arguments);

    //arguments.shift(); �����߻�

    //arguments ��ü�� �迭�� ��ȯ
    //this�� arguemtns ��ü�� ���ε��ض�
    var args = Array.prototype.slice.apply(arguments);
    console.dir(args);
}

myFunction(1, 2, 3);