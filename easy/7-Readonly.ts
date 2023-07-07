// in과 keyof도 같이 쓸 수 있다.
// readonly는 해당 프로퍼티를 읽기 속성으로 만든다.

type MyReadonly<T> = {
  readonly [key in keyof T]: T[key]
}

// 예시 - MyReadonly<Todo1>
interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}
