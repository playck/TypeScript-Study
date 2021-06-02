// Enum
// 가능한 쓰지 않는 것이 좋다고 한다.
// 타입이 정확하게 지정되지 않는다.
// union으로 대체가 가능하기 때문에 union을 사용하는 것이 좋다.

{
  enum DAYS {
    Monday, // Monday = 1 이와 같이 index를 임의 정의 할 수 있다. 문자열도 가능하다.
    Tuesday,
    Wednesday,
    THursday,
    Saturaday,
    Sunday,
  }

  console.log(DAYS.Tuesday); // 1
  const day = DAYS.Saturaday;
  console.log(day); // 5
}

// union으로 대체하기

{
  type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday";

  let dayOfweek: DaysOfWeek = "Monday";
}
