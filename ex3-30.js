// JavaScript source code
//ex3-30 !!������ Ȱ���� ���� �Ҹ��� ��ȭ

/*
 * 1. !!�� ������ �ǿ����ڸ� �Ҹ���(boolean)���� ��ȯ�ϴ� ���̴�.
 * 2. ����ִ� �� ��ü�� true�� ��ȯ�Ǵ°Ϳ� �����ؾ� �Ѵ�.
 */

console.log(!!0);           //��°� false
console.log(!!1);           //��°� true
console.log(!!'string');    //��°� true
console.log(!!'');          //��°� false
console.log(!!true);        //��°� true
console.log(!!false);       //��°� false
console.log(!!null);        //��°� false
console.log(!!undefined);   //��°� false
console.log(!!{});          //��°� true
console.log(!![1, 2, 3]);   //��°� true