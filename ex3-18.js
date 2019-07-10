// JavaScript source code
//ex3-18 �迭�� ��ü�� �������� ������

/*
 1.��ü�� ������Ƽ�� ������ ��  ���ȣ �ȿ� �����Ϸ��� 
 ������Ƽ�� �Ӽ��� ���ڿ� ���·� ����� �Ѵٰ� �ߴ�.
 colorsObj[0]�� �ƴ϶� colorsObj['0']�� ���·� �����ϴ� ���� �´�.
 ������ ���� ���������� colorsObj[0]�� ����� 'orange'�� �������� ����� ����.
 ������ �ڹٽ�ũ��Ʈ ������ []������ ���� ���ڰ� ���� ���, �ش� ���ڸ�
 �ڵ����� ���ڿ� ���·� �ٲ��ֱ� �����̴�.

2. �迭�� ��ü ��� object�̴�.

3. ��ü�� length ������Ƽ�� ������ ���� �ʴ�.

4. ��ü�� push() �޼��带 ����� �� ����.

5. ��ü�� ������Ÿ���� Object.prototype�̴�. �迭�� ��� Array.prototype ��ü�̴�.
�׷��� push�޼��带 ����Ҽ� ����.
��ü -> Object.prototype
�迭 -> Array.prototype -> Object.prototype
 */

var colorsArray = ['orange', 'yellow', 'green'];
console.log(colorsArray[0]);    //��°� orange
console.log(colorsArray[1]);    //��°� yellow    
console.log(colorsArray[2]);    //��°� green

//colorsObj
var colorsObj = {
    '0': 'orange',
    '1': 'yellow',
    '2': 'green'
};

console.log(colorsObj[0]);  //��°� orange
console.log(colorsObj[1]);  //��°� yellow
console.log(colorsObj[2]);  //��°� green

//typeof ������ ��
console.log(typeof colorsArray);    //��°� object (not array)
console.log(typeof colorsObj);      //��°� object

//length ������Ƽ
console.log(colorsArray.length);    //��°� 3
console.log(colorsobj.length);      //��°� undefined

//�迭 ǥ�� �޼���
colorsArray.push('red');    //['ornage','yellow','green','red]
colorsObj.push('red');      //Uncaught TypeError: object #<Object> has no method 'push'



