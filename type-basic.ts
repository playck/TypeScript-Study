// 변수명 뒤에 type을 정의 해주면 해당 타입만을 변수에 담을 수 있다.

const num: number = 1;

const str: string = "hello";

const boal: boolean = true;

// undefined

let age: number | undefined;
age = undefined;
age = 3;

// null

let person: null; // (x)
let preson2: string | null;

// any 가능한 사용하지 않는 것이 좋다.

let anything: any = 0;
anything = "hello";

// void
// 함수에서 아무것도 리턴하지 않으면 void
// 변수명에는 거의 사용되지 않음

function print(): void {
  console.log("hello");
  return;
}

// never
// 절대 리턴 할 수 없다.
// 변수명에는 사용되지 않음

function throwError(meg: string): never {
  throw new Error(meg);
}

// object
// 모든 object 타입을 담을 수 있음
// 너무 광범위한 타입이기에 가능한 사용하지 않는 것이 좋음

let obj: object;
function acceptSomeObject(obj: object) {}
acceptSomeObject({ name: "jongjin" });
