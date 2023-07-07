// 인덱스 시그니처, keyof, in, K extends keyof T, 리터럴 타입

type MyPick<T, K extends keyof T> = {
  // [key: string]: number <- 이렇게 쓰면 키 딱 하나만 가져오게 됨. 객체의 모든 키를 가져와야 한다면 in을 쓴다.
  [key in K]: T[key] // MyPick 타입은 키는 제네릭으로 들어오는 객체의 키, 값은 그 객체의 값이다. 
}
