// JavaScript source code
//ex5-16


/*setTimeOut �Լ��� ���ڷ� ���� �Լ��� ���� ���� i�� �����Ѵ�.
������ �� �Լ��� ����Ǵ� ������ countSecond()�Լ��� ������ ����� �����̰�,
i���� �̹� 4�� �� �����̴�. �׷��Ƿ� setTimeOut()�� ����Ǵ� �Լ��� ��� 4�� ����ϰ� �ȴ�.
*/
/*
function countSeconds(howmany) {
    for (var i = 1; i <= howmany; i++) {
        setTimeout(function () {        //1�ʵ��� ��ٸ� �Ŀ� I���� ����ϰ� �Ǵµ� 1�� ���ȿ� �̹� i���� 4�� �ȴ�.
            console.log(i)
        }, i * 1000);
    }
};

countSeconds(3);
*/

function countSeconds2(howmany) {
    for (var i = 1; i <= howmany; i++) {
        (function (j) {
            setTimeout(console.log(j), j * 1000);
        }(i));
    }
};

countSeconds2(3);