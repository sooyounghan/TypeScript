/*
    1. 서로소 유니온 타입
        - 서로소 관계 : 교집합이 하나도 없는, 공통 원소가 하나도 없는 두 개의 집합 관계
        - 교집합이 없는 타입들로만 만든 유니온 타입
*/
// Admin : {name}님, 현재까지 {kickCount}명 강퇴했습니다.
// Member : {name}님, 현재까지 {point}점 모았습니다.
// Guest : {name}님, 현재까지 {visitCount}번 오셨습니다.
// 코드가 직관적이지 않음 > 서로소 유니온 타입 활용
/*
function login(user: User) {
  if ("kickCount" in user) {
    // admin 타입
    console.log(`${user.name}님, 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  } else if ("point" in user) {
    // user 타입
    console.log(`${user.name}님, 현재까지 ${user.point}점 모았습니다.`);
  } else {
    // guest 타입
    console.log(`${user.name}님, 현재까지 ${user.visitCount}번 오셨습니다.`);
  }
}
*/
function login(user) {
    // 더욱 직관적인 방법 : Switch문 활용
    switch (user.tag) {
        case "ADMIN": {
            // user.tag가 무조건 ADMIN이므로 Admin 타입
            console.log(`${user.name}님, 현재까지 ${user.kickCount}명 강퇴했습니다.`);
            break;
        }
        case "MEMBER": {
            // user.tag가 무조건 MEMBER이므로 Member 타입
            console.log(`${user.name}님, 현재까지 ${user.point}점 모았습니다.`);
            break;
        }
        case "GUEST": {
            // user.tag가 무조건 GUEST이므로 Guest 타입
            console.log(`${user.name}님, 현재까지 ${user.visitCount}번 오셨습니다.`);
            break;
        }
    }
    /*
    if (user.tag === "ADMIN") {
      // admin 타입
      console.log(`${user.name}님, 현재까지 ${user.kickCount}명 강퇴했습니다.`);
    } else if (user.tag === "MEMBER") {
      // user 타입
      console.log(`${user.name}님, 현재까지 ${user.point}점 모았습니다.`);
    } else {
      // guest 타입
      console.log(`${user.name}님, 현재까지 ${user.visitCount}번 오셨습니다.`);
    }
    */
}
// 로딩 중 : 콘솔에 "로딩중" 출력
// 실패 : 콘솔에 "실패 : 에러메시지" 출력
// 성공 : 콘소에 "성공 : 데이터" 출력
/*
function processResult(task: AsyncTask) {
  switch (task.state) {
    case "LOADING": {
      console.log("로딩 중");
      break;
    }
    case "FAILED": {
      // FAILED로 타입 범위가 좁혀졌더할지라도,
      console.log(`에러 발생 :" ${task.error?.message}`); // error는 선택적 프로퍼티로 정의가 되어있으므로, 에러가 있는지 없는지 확실하게 알 수 없음 (즉, 좁혀질 타입 자체가 없음) - ? 또는 ! 사용 (좋은 방법은 아님)
      break;
    }
    case "SUCCESS": {
      // SUCCESS로 타입 범위가 좁혀졌더할지라도,
      console.log(`성공 : ${task.response?.data}`); // reponse는 선택적 프로퍼티로 정의가 되어있으므로, 에러가 있는지 없는지 확실하게 알 수 없음 (즉, 좁혀질 타입 자체가 없음) - ? 또는 ! 사용 (좋은 방법은 아님)
      break;
    }
  }
}
*/
/*
    1. 💡 동시에 여러가지 상태를 표현해야되는 객체 타입 정의 : 선택적 프로퍼티 사용보다 상태에 따라 타입들을 잘게 쪼개어 state, tag 같은 프로퍼티를 추가해 서로소 유니온 타입을 만들어줘야함
        - Taged Union Type : 태그를 붙여서 객체들을 완벽히 구별이 가능한 타입
    2. switch ~ case 문으로 직관적으로, 안전하게 타입을 좁혀서 사용 가능능
*/
function processResult(task) {
    switch (task.state) {
        case "LOADING": {
            console.log("로딩 중");
            break;
        }
        case "FAILED": {
            // 무조건 FailedTask 타입
            console.log(`에러 발생 :" ${task.error.message}`);
            break;
        }
        case "SUCCESS": {
            // 무조건 SuccessTask 타입
            console.log(`성공 : ${task.response.data}`);
            break;
        }
    }
}
export {};
