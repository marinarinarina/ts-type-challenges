// mappped type, indexed assertion type, tupel type
type TupleToObject<T extends readonly (number | string)[]> = {
  [P in T[number]]: P 
}

// 테스트케이스
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const // 배열 리터럴 타입: readonly ["tesla", "model 3", "model X", "model Y"]
const tuple2: string[] = ['tesla', 'model 3', 'model X', 'model Y'] // 스트링 배열 타입: string[]
const tupleNumber = [1, 2, 3, 4] as const
const tupleMix = [1, '2', 3, '4'] as const

// type cases = [
//   Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }>>,
//   Expect<Equal<TupleToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4 }>>,
//   Expect<Equal<TupleToObject<typeof tupleMix>, { 1: 1; '2': '2'; 3: 3; '4': '4' }>>,
// ]
