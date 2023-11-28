/*
### 질문
  `T`에서 `U`에 할당할 수 있는 타입을 제외하는 내장 제네릭 `Exclude<T, U>`를 이를 사용하지 않고 구현하세요.
  ```ts
  type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
  ```
*/

/* _____________ 여기에 코드 입력 _____________ */

type MyExclude<T, U> = T extends U? never : T;
