/**
 * 2 arguments passed: returns a new array
 * which is a result of input being filtered using
 * the specified filter function.
 *
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being filtered using original filter
 * function.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} filterer
 * @param {Array} input
 * @return {Array | Function}
 */

function curry<T extends Function>(fn: T): Function {
  const fullArgCount = fn.length; 
  return function createSubFn(...args: unknown[]): Function {
    if(args.length > fullArgCount) {
      throw new Error('Too many arguments');
    }
    if(args.length < fullArgCount) {
      return createSubFn.bind(null, ...args);
    }
    return fn.call(null, ...args);
  } 
}

interface FiltererFunc<I> {
    (): FiltererFunc<I>;
    (input: I[]): I[];
}

interface FilterFunc {
    (): FilterFunc;
    <I>(filterer: (item: I) => boolean): FiltererFunc<I>;
    <I>(filterer: (item: I) => boolean, input: I[]): I[];
}

export const filter = curry(<I>(fn: (item: I) => boolean, input: I[]) => input.filter(fn)) as FilterFunc;

// test
const t1 = filter();
const t2 = filter((x: number) => x > 1, [0, 1, 2]);
const t3 = filter((x: number) => x  === 0);
const t4 = t3([1, 1, 0, 1]);
