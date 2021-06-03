// Inference

let text = "hello";

// 따로 함수 인자에 타입을 명시하지 않으면 any가 할당됨
function print(message: "hello") {
  console.log(message);
}

print("hello");

// 숫자의 연산이기 때문에 타입스크립트에서 반환 값도 숫자라는걸 유추할 수 있다.
function addNum(x: number, y: number) {
  return x + y;
}

// 타입 추론보다는 가능한 명확한 타입을 작성해주는 것이 좋다.
