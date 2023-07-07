// mapped type 응용문제
//  모든 객체의 속성들을 순회해서 optional(?) 로 바꾸거나 readonly 로 지정하려고 합니다. 
// 아래처럼 인터페이스를 여러 개 사용하지 말고 제네릭을 활용하여 타입을 정의하세요.
// 테스트케이스를 바꿔서도 안됩니다.


interface Person {
   name?: string;
   age?: number;
}

// ------- Bad Case!! -------
// interface PersonPartial {
//    name?: string;
//    age?: number;
// }

// interface PersonReadonly {
//    readonly name: string;
//    readonly age: number;
// }

// ------- 정답코드 -------



// 테스트케이스(손대지 마시오)
const obj1: Person = {
    name: "Kaneda",
    age: 17,
}

const obj2: PersonPartial = {
    name: "Kaneda",
}

const obj3: PersonReadonly = {
    name: "Kaneda", // type이 readonly (property) name: string이 되어야 합니다.
    age: 17, // type이 readonly (property) age: number가 되어야 합니다.
}
