// Type Aliases
// 내가 원하는 새로운 타입을 정의한다.

{
  type Text = string;
  const name: Text = "jin";

  type Num = number;
  type Student = {
    name: string;
    age: number;
  };

  const student: Student = {
    name: "jongjin",
    age: 31,
  };
}

// String Literal Types
// 이와 같이 정의하면 해당 타입에는 그 문자만 기입이 가능하다.

type Name = "name";
let jjName: Name;
jjName = "name";

const kjjName: Name = "name";
