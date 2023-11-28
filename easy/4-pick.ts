// 객체 T의 모든 속성을 유니온 타입으로 받는 K 타입이라면, K in keyof T겠지만,
// 객체 T의 일부 속성을 유니온 타입으로 받는다고 나와있기 때문에 K extends keyof T가 맞다.
// 타입스크립트에서 타입은 가능한 값의 집합이다. 따라서 extends는 T의 '확장'이 아니라 T의 '부분 집합'으로 봐야 한다.
type MyPick<T, K extends keyof T> = {
  // 객체의 모든 키를 가져와야 한다면 in을 쓴다. [key: string]: number <- 이렇게 쓰면 키 딱 하나만 가져오게 됨.
  [key in K]: T[key] // MyPick 타입은 키는 제네릭으로 들어오는 객체의 키, 값은 그 객체의 값이다. 
}
