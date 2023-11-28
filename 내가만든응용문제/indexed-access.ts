// indexed access 응용문제

// 어떤 대학 동아리의 회원 정보를 담은 배열은 아래와 같습니다:
const Users = [
  { name: "Alice", age: 22, major: "architecture", college: "engineering" },
  { name: "Bob", age: 21, major: "nursing", college: "medical" },
  { name: "Eve", age: 25, major: "computer science", college: "engineering" },
  { name: "Dean", age: 20, major: "psychology", college: "social sciences" },
  { name: "Sara", age: 20, major: "veterinary medicine", college: "medical" },
];

// Student type은 Users를 활용해서 만들어야 합니다. 타입 에러가 발생하지 않도록 적절한 Student 타입을 작성해주세요. 
const student: Student = {
    name: "Mason",
    age: 20,
    major: "mathematical",
    college: "natural sciences",
}


// ------ 정답코드 ------
