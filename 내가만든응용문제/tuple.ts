/* 튜플 응용문제

VIP 유저에게 생일일 경우 축하 알림 및 쿠폰을 주는 이벤트를 실시하고자 한다.
그러기 위해선 우린 먼저 유저의 고유 정보 및 생일날짜, 그리고 VIP 회원인지와 같은 정보를 조회하여야 한다.
아래와 같이 배열의 첫 번째 요소는 유저의 고유 인덱스 ,
두 번째 요소는 아이디 ,
세 번째 요소는 패스워드,
네 번째 요소는 생일날짜,
다섯 번째 요소는 VIP 회원인지 아닌지 여부를 판단하는 boolean이다.

const userInfo1 = [1, 'user1@example.com' , 'abcd123' , '1999-01-01' , true];

그리고 해당 규칙으로 동일하게 다른 사용자들의 정보 또한 변수에 담고 있다고 가정하자.
const userInfo1 = [1, 'user1@example.com' , 'abcd123' , '1999-01-01' , true];
const userInfo2 = [2, 'user2@example.com' , 'abcd1234' , '1994-05-12' , false];
const userInfo3 = [3, 'user3@example.com' , 'abcd12345' , '2001-03-15' , false];

배열을 요소 순서 규칙에 맞게 작성해야하고, 만약 순서규칙과 맞지 않다면 타입 에러가 발생하도록 코드를 작성하세요.
*/

// 예를 들어 아래는 배열 요소 규칙인 [유저의 고유 인덱스, 아이디, 패스워드, 생일날짜]와 맞지 않으므로 코드에 빨간 밑줄이 그어져야 합니다.
const userInfoBadCase = ['user4@example.com', 4 , true , '2002-10-25' , 'abcd123456'];

// 아래는 배열 요소 규칙에 맞게 작성했으므로 에러가 발생하지 않습니다.
const userInfoGoodCase = [1, 'user1@example.com' , 'abcd123' , '1999-01-01' , true];

// ------ 정답코드 ------
