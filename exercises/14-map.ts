/*
Exercise:

    Provide proper typing for the specified functions.

Bonus:

    Could you please also refactor the code to reduce
    code duplication?
    You might need some excessive type casting to make
    it really short.
    
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

interface MapperFn<I, O> {
  (): MapperFn<I, O>;
  (input: I[]): O[];
}

interface MapFn {
  (): MapFn;
  <I, O>(mapper: (item: I) => O): MapperFn<I, O>;
  <I, O>(mapper: (item: I) => O, input: I[]): O[];
}

const map = curry(<I, O>(fn: (arg: I) => O, input: I[]) => input.map(fn)) as MapFn;


// test
console.log(map()(String)()([1,2,3,4])); // ['1', '2', '3', '4'];
console.log(map(Boolean)([1,2,3,4])); // [true, true, true, true];
console.log(map(Boolean, [])); // [false];
