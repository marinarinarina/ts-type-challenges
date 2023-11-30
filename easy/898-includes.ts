/*
  898 - Includes
  -------
  by null (@kynefuk) #쉬움 #array

  ### 질문

  JavaScript의 `Array.includes` 함수를 타입 시스템에서 구현하세요. 타입은 두 인수를 받고, `true` 또는 `false`를 반환해야 합니다.

  예시:

  ```ts
  type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
  ```

  > GitHub에서 보기: https://tsch.js.org/898/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Rest]
  ? Equal<First, U> extends true
    ? true
    : Includes<Rest, U>
  : false
