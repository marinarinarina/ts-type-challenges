/*
  189 - Awaited
  -------
  by Maciej Sikora (@maciejsikora) #쉬움 #promise #built-in

  ### 질문

  Promise와 같은 타입에 감싸인 타입이 있을 때, 안에 감싸인 타입이 무엇인지 어떻게 알 수 있을까요?

  예시: 들어 `Promise<ExampleType>`이 있을 때, `ExampleType`을 어떻게 얻을 수 있을까요?

  ```ts
  type ExampleType = Promise<string>

  type Result = MyAwaited<ExampleType> // string
  ```

  > 출처: [original article](https://dev.to/macsikora/advanced-typescript-exercises-question-1-45k4) by [@maciejsikora](https://github.com/maciejsikora)

  > GitHub에서 보기: https://tsch.js.org/189/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

// infer U는 Promise 내부로 접근하기 위한 변수라고 생각하자. U에 접근할 수 없다면 never를 반환한다.
type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer U>
  ? U extends PromiseLike<any>
    ? MyAwaited<U>
    : U
  : never;


/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type X = Promise<string> // string
type Y = Promise<{ field: number }> // { field: number }
type Z = Promise<Promise<string | number>> // string | number
type Z1 = Promise<Promise<Promise<string | boolean>>> // string | boolean
type T = { then: (onfulfilled: (arg: number) => any) => any } // number

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
  Expect<Equal<MyAwaited<Z1>, string | boolean>>,
  Expect<Equal<MyAwaited<T>, number>>,
]

// @ts-expect-error
type error = MyAwaited<number>
