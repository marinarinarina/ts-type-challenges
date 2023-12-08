/*
전역변수나 api의 타입 형태를 알려주기 위해 선언 파일을 작성한다.
선언파일(.d.ts)은 값이 아닌 타입만 선언 가능한 코드 영역인 앰비언트 컨텍스트를 생성
ex. 일반적인 타입, 인터페이스, 모듈
인터페이스를 제외한 모든 타입 앞에는 declare 키워드를 붙인다.

전역에서 사용하고 싶은 타입은 import 또는 export를 빼거니, 모듈 컨텍스트 사이에 declare global로 전역 컨텍스트를 생성하면 됨
*/

// 이름이 'str-utils'인 모듈 선언
declare module 'str-utils' {
    type StrUtil = (input: string) => string;

    export const strReverse: StrUtil;
    export const strToLower: StrUtil;
    export const strToUpper: StrUtil;
    export const strRandomize: StrUtil;
    export const strInvertCase: StrUtil;
}
