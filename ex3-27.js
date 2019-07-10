// JavaScript source code
//ex3-27 기본 타입 변수에서의 메서드 호출

/*
    1. toExponential()는 표준 숫자형 메서드로서, 숫자를 지수 형태의 문자열로 변환한다.

    2. charAt()은 문자열에서 인자로 받은 위치에 있는 문자를 반환한다. 문자열 인덱스는 0부터
    시작한다.

    3. 숫자와 문자열들은 기본 타입이지만, 이들을 위해 정의된 표준 메서드들을 객체처럼 호출할
    수 있다.
*/

//숫자 메서드 호출
var num = 0.5;
console.log(num.toExponential(1));  //출력값 '5.0e-1'

//문자열 메서드 호출
console.log("test".charAt(2));  //출력값 's'

