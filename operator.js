/* 할당 연산자 */

/* 1. 할당 */
let test1;

let test2 = 5;
test1 = test2;
console.log(test1); // 5

test2 = '공우정';
test1 = test2;
console.log(test1); // 공우정

test2 = [1, 2, 3];
test1 = test2;
console.log(test1); // [1, 2, 3]

test2 = [1, 2];
console.log(test1); // [1, 2, 3] 원본 배열이 바뀌어도 할당된 값은 바뀌지 않는다. 

test2 = {
    name : '공우정',
    age : 29
}
test1 = test2;
console.log(test1); // {name:'공우정', age:29}

/* 덧셈 할당 */
let test3 = 4;
let test4 = 9;

test3 += test4;
console.log(test3); // 13
console.log(typeof test3); // number

test4 = '공우정';
test3 += test4;
console.log(test3); //13공우정
console.log(typeof test3); // string

test4 = [1, 2];
test3 += test4;
console.log(test3); // 13공우정1,2
console.log(typeof test3); // string

test3 = [1, 2];
test4 = [3, 4];
test3 += test4;
console.log(test3); //1,23,4
console.log(typeof test3); // string 

test3 = {name : '공우정'};
test4 = {age : 24};
test3 += test4;
console.log(test3); // [object Object][object Object]
console.log(typeof test3); // string

/* 뺄셈 할당 */
let test5 = 19;
let test6 = 9;

test5 -= test6;
console.log(test5); // 10

test6 = 21;
test5 -= test6;
console.log(test5); // -11

test5 = '공우정';
test6 = '우정';
test5 -= test6;
console.log(test5); // NaN

test5 = [1, 2];
test6 = [2];
test5 -= test6;
console.log(test5); // Nan

test5 = {name : '우정'};
test6 = {name : '우정'};
test5 -= test6;
console.log(test5); // NaN

/* 곱샘 할당 */
let test7 = 10;
let test8 = 9;

test7 *= test8;
console.log(test7); // 90

test7 = 2.54;
test8 = 3.7;
test7 *= test8;
console.log(test7); //9.398000000000001

/* 나눗셈, 나머지 할당 */
let test9 = 10;
let test10 = 2;

test9 /= test10;
console.log(test9); // 5

test9 %= test10;
console.log(test9); // 1

/* 2. 비교 연산자 */

/* 동등(==) */
let result;
let test11 = 9;
let test12 = 9;

result = test11 == test12;
console.log(result); // true

test12 = 10;
result = test11 == test12;
console.log(result); // false

test11 = 'kong';
test12 = 'kong';

result = test11 == test12;
console.log(result); // true 

test12 = 'woo';
result = test11 == test12;
console.log(result); // false 

test11 = 11;
test12 = '12';
result = test11 == test12;
console.log(result); // false ,,, string, number 두 변수의 타입이 다르기 때문이다. 

test11 = [1, 2];
test12 = [3, 4];
result = test11 == test12;
console.log(result); // false ... 배열을 비교할때는 배열은 참조 타입이여서 해당 변수에는 배열의 주소값이 할당이 되어서 false 로 나온다

test12 = [1, 2];
result = test11 == test12;
console.log(result); // false  ... 두 배열의 값이 같더라도 해당 주소값이 다르기때문에 false 로 나온다

test11 = {name : '공우정'};
test12 = {name : '공우정'};
result = test11 == test12;
console.log(result); // false ...  객체 역시 참조 타입이여서 해당 주소값이 다르기 때문에 false 로 나온다.

/* 부등(!=) */
let test13 = 7;
let test14 = 8;
result = test13 != test14;
console.log(result); // true 

/* 일치(===) 불일치(!==) */
let test15 = 8;
let test16 = 8;
result = test15 === test16;
console.log(result); // true 

test16 = '8';
result = test16 === test16;
console.log(result); // true .... 동등(==) 연산자이면 서로 타입이 달라서 false 겠지만 일치(===) 연산자이면 해당 값 자체를 비교한다. 

test15 = '우정';
test16 = '우정';
result = test15 === test16;
console.log(result); // true 

test15 = [1, 2];
test16 = [1, 2];
result = test15 === test16;
console.log(result); // false ...배열은 일치 연산자를 사용해도 false 이다. 

test15 = {name : '공우정'};
test16 = {name : '공우정'};
result = test15 === test16;
console.log(result); // false ... 객체도 일치 연산자를 사용해도 false 이다. 참조타입은 모두 동일하다. 

test15 = 18;
test16 = 17;
result = test15 !== test16;
console.log(result); // true

test15 = 18;
test16 = '17';
result - test15 !== test16;
console.log(result); // true

/* <, >, <=, >= (부등호) */
let test17 = 8;
let test18 = 9;

result = test17 < test18;
console.log(result); // true

result = test17 <= test18;
console.log(result); // true

result = test17 > test18;
console.log(result); // false

result = test17 >= test18; 
console.log(result); // false

test17 = 8;
test18 = '9';

result = test17 < test18;
console.log(result); // true ... 부등호 연산자도 일치 연산자 처럼 해당 값 자체를 비교한다.

result = test17 <= test18;
console.log(result); // true

result = test17 > test18;
console.log(result); // false

result = test17 >= test18; 
console.log(result); // false

/* 3. 산술 연산자 */

/* 덧셈(+), 뺄셈(-), 나눗셈(/), 곱샘(*) */
let test19 = 10;
let test20 = 3;

result = test19 + test20;
console.log(result); // 13

result = test19 - test20;
console.log(result); // 7

result = test19 / test20;
console.log(result); // 3.333...

result = test19 * test20;
console.log(result); // 30

/* 증가(++), 감소(--) 연산자 */
let test21 = 10;

result = test21++; // reult 에 값을 할당하고 ++ 증감 연산자 실행
console.log(result); // 10 
console.log(test21); // 11

test21 = 10;

result = ++test21; // ++ 증감 연산자 실행후 result 에 값 할당. 
console.log(result); // 11
console.log(test21); // 11

test21 = 10;

result = test21--; // reult 에 값을 할당하고 -- 증감 연산자 실행
console.log(result); // 10 
console.log(test21); // 9

test21 = 10;

result = --test21; // -- 증감 연산자 실행후 result 에 값 할당. 
console.log(result); // 9
console.log(test21); // 9

/* 나머지(%), 단항 부정 연산자(-), 숫자화연산자(+) */
let test22 = 10;
let test23 = 3;

result = test22 % test23;
console.log(result); // 1 ... 나머지 연산 

result = -test23;
console.log(result); // -3

result = +true;
console.log(result); // 1 

result = +false;
console.log(result); // 0

/* 4. 논리 연산자 */

/* && 논리곱 연산자 */
result = true && true; 
console.log(result); // true

result = true && false;
console.log(result); // false

result = false && true;
console.log(result); // false

result = false && false;
console.log(result); // false 

/* || 논리합 연산자 */
result = true || true; 
console.log(result); // true

result = true || false;
console.log(result); // true

result = false || true;
console.log(result); // true

result = false || false;
console.log(result); // false 

/* ! 논리 부정 연산자 */
result = !true;
console.log(result); // fasle

result = !false;
console.log(result); // true