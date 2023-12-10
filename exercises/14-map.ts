/*

알아야 할 개념:
overloaded function interface의 전체 타입 추론 - https://blog.seiker.kr/overloaded-function-interface-parameter-type-inference/
arguments 객체
this와 apply

Exercise:

    Provide proper typing for the specified functions.

Bonus:

    Could you please also refactor the code to reduce
    code duplication?
    You might need some excessive type casting to make
    it really short.

*/

/* 
가변 인수가 전달될 수 있는 함수에 arguments 객체를 사용한다.
[...arguments]: 함수의 인수를 받아 배열로 만든다. 
예를 들어
const t1 = map(function(num) {
    return num * 2;
}, [1, 2, 3]);
라는 코드가 있다면,
[function(num) {
  return num * 2;
}, [1, 2, 3]]
가 반환된다.
*/
// Function.length: 함수를 정의할 때 사용한 매개변수의 개수(=toFunctional에서 정의한 개수)
// arguments.length: 사용자가 제공하는 배열인자(함수 매개변수)의 개수(=map에서 정의한 개수)
function toFunctional<T extends Function>(func: T): Function {
    const fullArgCount = func.length; 
    function createSubFunction(curriedArgs: unknown[]) {
        return function(this: unknown) {
            const newCurriedArguments = curriedArgs.concat([...arguments]); 
            if (newCurriedArguments.length > fullArgCount) {
                throw new Error('Too many arguments');
            }
            if (newCurriedArguments.length === fullArgCount) {
                return func.apply(this, newCurriedArguments); // 함수가 정의한 매개변수 개수와 사용자가 작성한 매개변수 개수가 일치해야 map() 실행
            }
            return createSubFunction(newCurriedArguments);
        };
    }
    return createSubFunction([]);
}


// 호출 시그니처: 인터페이스는 함수의 타입을 정의할 때도 사용함. 함수의 모양만을 정의한다. 오버로드도 가능하다.
interface MapperFunc<I, O> {
    (): MapperFunc<I, O>;
    (input: I[]): O[];
}

interface MapFunc {
    (): MapFunc;
    <I, O>(mapper: (item: I) => O): MapperFunc<I, O>;
    <I, O>(mapper: (item: I) => O, input: I[]): O[];
}

/**
 * 2 arguments passed: returns a new array
 * which is a result of input being mapped using
 * the specified mapper.
 *
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being mapped using original mapper.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} mapper
 * @param {Array} input
 * @return {Array | Function}
 */
export const map = toFunctional(<I, O>(fn: (arg: I) => O, input: I[]) => input.map(fn)) as MapFunc;
// export function map<T extends unknown>(mapper: Function, input: T[]): Function | T {
//     if (arguments.length === 0) {
//         return map;
//     }
//     if (arguments.length === 1) {
//         return function subFunction(subInput: Mapper<T>) {
//             if (arguments.length === 0) {
//                 return subFunction;
//             }
//             return subInput.map(mapper);
//         };
//     }
//     return input.map(mapper);
// }
